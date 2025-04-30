import { createRoot } from "react-dom/client";
import App from "./App";
import Clarity from "@microsoft/clarity";
import "./index.css";

const projectId = "rc1cmukq2g";
Clarity.init(projectId);
createRoot(document.getElementById("root")!).render(<App />);
