import { useState } from 'react'
import leaves from '../assets/botanical-panel.png'
import styles from './LoginPage.module.css'

function GoogleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-1.99 3.02v2.51h3.23c1.89-1.74 2.98-4.3 2.98-7.36Z"/><path fill="#34a853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.23-2.51c-.89.6-2.03.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z"/><path fill="#fbbc05" d="M6.41 13.92a6 6 0 0 1 0-3.84V7.49H3.07a10 10 0 0 0 0 9.02l3.34-2.59Z"/><path fill="#ea4335" d="M12 5.96c1.47 0 2.79.51 3.82 1.51l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96Z"/></svg>
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877f2" d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z"/><path fill="#fff" d="m16.66 15.47.53-3.47h-3.32V9.74c0-.95.46-1.87 1.95-1.87h1.51V4.92s-1.37-.23-2.68-.23c-2.74 0-4.53 1.66-4.53 4.67V12H7.08v3.47h3.04v8.38a12.1 12.1 0 0 0 3.75 0v-8.38Z"/></svg>
}

export default function LoginPage() {
  const [message, setMessage] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    setMessage('Preview only — login is not connected to a backend.')
  }

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="welcome-title">
        <div className={styles.artwork} aria-hidden="true"><img src={leaves} alt="" /></div>
        <div className={styles.content}>
          <h1 id="welcome-title" className={styles.welcome}><strong>Hello,</strong> Guyss!</h1>
          <nav className={styles.navigation} aria-label="Account options">
            <button className={styles.active} type="button" aria-current="page" onClick={() => setMessage('')}>Login</button>
            <button type="button" onClick={() => setMessage('SignUp is not included in the supplied design preview.')}>SignUp</button>
          </nav>
          <div className={styles.formArea}>
            <form className={styles.form} onSubmit={handleLogin}>
              <label className={styles.srOnly} htmlFor="email">Email address</label>
              <input className={styles.input} id="email" name="email" type="email" placeholder="Enter your email" autoComplete="username" required />
              <label className={styles.srOnly} htmlFor="password">Password</label>
              <input className={styles.input} id="password" name="password" type="password" placeholder="Enter Password" autoComplete="current-password" required />
              <button className={styles.login} type="submit">Login</button>
            </form>
            <p className={styles.divider}>Or</p>
            <div className={styles.social}>
              <button type="button" aria-label="Continue with Google" onClick={() => setMessage('Preview only — Google sign-in is not connected.')}><GoogleIcon /></button>
              <button type="button" aria-label="Continue with Facebook" onClick={() => setMessage('Preview only — Facebook sign-in is not connected.')}><FacebookIcon /></button>
            </div>
            <p className={styles.message} role="status">{message}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
