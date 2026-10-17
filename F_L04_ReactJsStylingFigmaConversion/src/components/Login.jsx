import "./Login.css";
import logo from "../assets/logo.svg";

export default function Login() {
    return (
        <div className="login">
            {/* ---------- Left panel ---------- */}
            <section className="left">
                <h1 className="tagline">
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className="logo" src={logo} alt="Design Spacee logo" />

                <p className="link">figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className="right">
                <div className="form">
                    <h2>Sign-in</h2>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button>Login</button>

                    <p className="signup">
                        Don't have an account? <a href="#">Signup Here</a>
                    </p>
                </div>
            </section>
        </div>
    );
}