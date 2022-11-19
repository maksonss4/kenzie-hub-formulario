import { ContainerRoutes } from "./routes";
import Global from "./styles";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Global />
      <ToastContainer />
      <ContainerRoutes />
    </>
  );
}

export default App;
