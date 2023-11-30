import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ top: "8rem" }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
