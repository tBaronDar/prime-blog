import { NavLink, Outlet } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <header>
        <NavLink to="/posts">Home</NavLink>
        <NavLink to="/posts/new-post">Create Post</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainNavigation;
