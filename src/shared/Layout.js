import React from "react";
import BottomBar from "./BottomBar";

function Footer() {
  return <div>Footer</div>;
}
function Layout({ children }) {
  return (
    <div>
      {children}
      <BottomBar />
      <Footer />
    </div>
  );
}
export default Layout;
