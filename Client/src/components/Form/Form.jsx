import React from 'react'
import styles from './Form.module.css'
import { useState } from 'react'
import validator from './validator'


const Form = (props) => {

  const { login } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
 })

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validator({ ...userData, [event.target.name]: event.target.value }));
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }


  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" className={styles.img} alt="" />
      <h2 className={styles.title}>Log in</h2>
        <div className={styles.mailDiv}>
          <label htmlFor="email" className={styles.labelMail}>Email:</label>
          <input name="email" type="text" placeholder='Tu email...'  className={styles.inputEmail} value={userData.email} onChange={handleChange} />
          {errors.e2 ? (
            <p className={styles.error}>{errors.e2}</p>
          ) : errors.e3 ? (
            <p className={styles.error}>{errors.e3}</p>
          ) : (
            <p className={styles.error}>{errors.e1}</p>
          )}
        </div>
        <div className={styles.passDiv}>
          <label htmlFor="password" className={styles.labelPass}>Password:</label>
          <input name="password" type="password" placeholder='Tu password...'  className={styles.inputPassword} value={userData.password} onChange={handleChange} />
          {errors.p2 ? <p className={styles.error}>{errors.p2}</p> : <p className={styles.error}>{errors.p1}</p>}
        </div>
        <button type='submit' className={styles.btn}>Submit</button>
    </form>
    </div>
  )
}

export default Form;
