import React from 'react'
import styles from '../styles/Login.module.scss';
import TextField from '@mui/material/TextField';

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  }

  return (
    <div className={styles.login}>
      <div className={styles.inner}>
        <h1 className={styles.loginTitle}>Sign In</h1>
        
          <div className={styles.left}>
            <div className={styles.loginButton} onClick={google} style={{backgroundColor:"#df4930"}}>
              <img src="/img/google.png" alt="" className={styles.icon} />
              Google
            </div>
            <div className={styles.loginButton} onClick={github} style={{backgroundColor:"#507cc0"}}>
              <img src="/img/github.png" alt="" className={styles.icon} />
              Github
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.line} />
            <div className={styles.or}>Or</div>
          </div>
          <div className={styles.right}>
            <div className={styles.loginForm}>
              <TextField id="standard-basic" label="Username" variant="standard" className={styles.input} />
              <TextField id="standard-basic" label="Password" type="password" variant="standard" className={styles.input} />
              <button className={styles.btn}>Login</button>
            </div>
          </div>  
              
      </div>
    </div>
  )
}

export default Login
