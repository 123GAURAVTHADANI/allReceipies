import { Link, Outlet, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

function User() {
  const [value, setValue] = useState("profile");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("User Rendered in Mounting Phase");
    navigate("/user/profile");
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == "profile") {
      navigate("profile");
    } else if (newValue == "settings") {
      navigate("settings");
    }
  };

  console.log(">>User Rendering");
  return (
    <div className="userContainer">
      <h3>Good Evening!!!</h3>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="profile" label="Profile" />
        <Tab value="settings" label="Settings" />
      </Tabs>
      {products &&
        products.map((item) => {
          return <div>{item.title}</div>;
        })}
      <Outlet />
    </div>
  );
}
export default User;
