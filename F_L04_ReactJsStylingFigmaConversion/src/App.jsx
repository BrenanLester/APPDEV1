import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
    const [screen, setScreen] = useState("login");

    if (screen === "signup") {
        return <Signup onLogin={() => setScreen("login")} />;
    }

    return <Login onSignup={() => setScreen("signup")} />;
}