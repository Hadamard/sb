import React from "react";
import { Link } from "react-router-dom";

function RedirectButton() {
  return (
    <Link to="https://hadamard.com" target="_blank">
      <button>Zu Hadamard.com</button>
    </Link>
  );
}

export default RedirectButton;
