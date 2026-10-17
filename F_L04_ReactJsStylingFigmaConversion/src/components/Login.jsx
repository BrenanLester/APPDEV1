import styles from "./Login.module.css";
import logo from "../assets/logo.svg";

export default function Login({ onSignup }) {
    return (
        <div className={styles.login}>
            {/* ---------- Left panel ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Sign-in</h2>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button>Login</button>

                    <p className={styles.signup}>
                        Don't have an account?{" "}
                        <a
                            href="#signup"
                            onClick={(event) => {
                                event.preventDefault();
                                onSignup();
                            }}
                        >
                            Signup Here
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}