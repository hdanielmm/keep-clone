import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const name = "hdm";

  return (
    <footer>
      <p>
        {name + " ⓒ " + currentYear}
      </p>
    </footer>
  )
}

export default Footer;