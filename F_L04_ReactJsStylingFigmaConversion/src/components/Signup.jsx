import styles from "./Signup.module.css";
import sharedStyles from "./Login.module.css";
import logo from "../assets/logo.svg";

export default function Signup({ onLogin }) {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <main className={sharedStyles.login}>
            {/* Shared branding panel */}
            <section className={sharedStyles.left}>
                <h1 className={sharedStyles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={sharedStyles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={sharedStyles.link}>
                    figma.com/@designspacee
                </p>
            </section>

            {/* Registration panel */}
            <section
                className={sharedStyles.right}
                aria-labelledby="signup-heading"
            >
                <div className={styles.content}>
                    <h2 id="signup-heading" className={styles.heading}>
                        Create Account
                    </h2>

                    <div className={styles.socialButtons}>
                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            Sign up with Google
                        </button>

                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            Sign up with Facebook
                        </button>
                    </div>

                    <p className={styles.divider}>— OR —</p>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <input
                            className={styles.input}
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            autoComplete="name"
                            required
                        />

                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="email"
                            required
                        />

                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            required
                        />

                        <button
                            className={styles.submitButton}
                            type="submit"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className={styles.loginPrompt}>
                        Already have an account?{" "}
                        <a
                            className={styles.loginLink}
                            href="#login"
                            onClick={(event) => {
                                event.preventDefault();
                                onLogin();
                            }}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}