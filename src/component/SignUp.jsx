import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { auth } from "../config/Firebase"
import styles from "../styles/SignUp.module.css"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const Signup = () => {
    
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.main}>
            <h1>MusiX</h1>
            <form>
            <div>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>
            <p>
                Already have on account?
                <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
          <div className={styles.sec}>
          </div>
        </div>
    </div>
  );
};
