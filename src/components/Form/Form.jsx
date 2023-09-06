import React from 'react'

const Form = () => {
  return (
    <form>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={form.email} onChange={handleChange} className={errors.mail ? styles.errors : styles.success} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className={""} />
        </div>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Form