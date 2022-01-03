import React from 'react'
import styles from '../styles/Register.module.scss';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.inner}>

        <h1 className={styles.registerTitle}>Sign Up</h1>            
        <div className={styles.left}>
          <img src="/img/register.svg" alt="" className={styles.icon} />            
        </div>
        <div className={styles.center}>
          <div className={styles.line} />            
        </div>
        <div className={styles.right}>
          <div className={styles.registerForm}>
            <TextField id="standard-basic" label="Username" variant="standard" className={styles.input} />
            <TextField id="standard-basic" label="Email" variant="standard" className={styles.input} />
            <TextField id="standard-basic" label="Password" type="password" variant="standard" className={styles.input} />
            <button className={styles.btn}>Register</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register
