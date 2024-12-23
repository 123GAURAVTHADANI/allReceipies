import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Router from "./Components/Routers/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import ParentComponent from "./Components/ParentComponent/ParentComponent.jsx";
import ChildComponent from "./Components/ChildComponent/ChildComponent.jsx";
import InnerComponent from "./Components/InnerComponent/InnerComponent.jsx";

store.subscribe(() => {
  console.log(">>state", store.getState());
});

createRoot(document.getElementById("root")).render(<Router />);

///   <ParentComponent
// );entComponent color="white" bgColor="black" fontSize="16px">
//     <ChildComponent color="purple">
//       <InnerComponent />
//     </ChildComponent>
//   </ParentComponent>
