import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import SignUp from "../SignUp/signup";
import Login from "../Login/Login";
import User from "../User";
import UserProfile from "../UserProfile";
import UserSettings from "../UserSettings";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/user/profile" element={<UserProfile />} /> */}

        <Route path="/user" element={<User />}>
          {/* children = outlet component */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
