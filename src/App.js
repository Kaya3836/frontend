import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./component/SignUp";
import { Home } from "./component/Home";
import { LogIn } from "./component/LogIn";
import { Main } from "./component/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/main" element={<Main />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;