
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexRoutes from "./Components";
import { BrowserRouter } from "react-router-dom";
// Alertas <<<---
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>

);