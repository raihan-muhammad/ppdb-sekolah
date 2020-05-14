import React from "react";

const Button = ({ title }) => {
  return (
    <a class="cta-header-btn" href="#">
      <button class="btn-hover base-gradient">{title}</button>
    </a>
  );
};

export default Button;
