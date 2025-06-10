import {  UserButton } from "@clerk/clerk-react";


const Navbar = () => {
  return (
    <>
      <div className="class-navbar">
        <ul>
          <li>Home</li>
          <li>Nosotros</li>
          <li>Juego</li>
          <span className="class-user" style={{ position: "absolute", right: "10px", scale: "1.09" }}> <UserButton /></span>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
