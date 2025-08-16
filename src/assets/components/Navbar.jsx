import { NavLink } from "react-router";
import Aboutme from "./Aboutme";
const Navbar = () => (
  <div className="mainnav bg-black">
  <nav className="mr-2 w-full p-2 h-24 text-white bg-black md:block hidden" style={{borderBottom: "2px solid rgba(255, 255, 255, 0.5)"}}>
    <div className="myName text-3xl">
      <a href="" className="name">
        Unika Portfolio
      </a>
    </div>
    <div className="links flex float-right gap-5 text-2xl">
      <div className="home hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <NavLink to={""} className="bg-black w-32">
          Home
        </NavLink>
      </div>
      <div className="about hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <NavLink to="skills" className="bg-black w-32">
          Skills
        </NavLink>
      </div>
      <div className="skills hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <NavLink to={"aboutme"} className="bg-black w-32">
          About me
        </NavLink>
      </div>
      <div className="contact hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 h-9">
        <NavLink to={"contactme"} className="bg-black w-32">
          Contact me
        </NavLink>
      </div>
      <div className="blog hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 h-9">
        <NavLink to={"/blog"} className="bg-black w-32">
          Blog
        </NavLink>
      </div>
    </div>
  </nav>
  <nav className="for-phone bg-black p-2 text-white h-10 md:hidden">
    <div className="links flex float-right gap-5 text-ms">
      <div className="home hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <a href="home.jsx" className="bg-black w-32">
          Home
        </a>
      </div>
      <div className="about hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <a href="#main" className="bg-black w-32">
          About me
        </a>
      </div>
      <div className="skills hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <a href="#skill" className="bg-black w-32">
          Skills
        </a>
      </div>
      <div className="contact hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 h-9">
        <a href="#contact" className="bg-black w-32">
          Contact me
        </a>
      </div>
      
      </div>
  </nav>
  </div>
);

export default Navbar;
