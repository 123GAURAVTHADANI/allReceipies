import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import SignUp from "../SignUp/signup";
import Login from "../Login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
