import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store.js";
import MenuContext from "./context/MenuContext.jsx";
import SidebarContext from "./context/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Provider store={store}>
      <MenuContext>
        <SidebarContext>
          <App/>
        </SidebarContext>
      </MenuContext>
    </Provider>
  </>
);
