import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const SnowFlakes = () => (
  <div className="snowflakes" aria-hidden="true">
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
    <div className="snowflake">
      <div className="inner">❅</div>
    </div>
  </div>
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <SnowFlakes /> */}
    <App />
  </StrictMode>
);
