const Navbar = () =>
    <nav className="mr-2 ml-6 text-white bg-black">
    <div className="myName text-3xl">
        <a href="home.jsx" className="name">Unika Portfolio</a>
        </div>
        <div className="links flex float-right gap-5 text-2xl">
    <div className="home hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <a href="home.jsx" className="bg-black w-32">Home</a>
    </div>
    <div className="about hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <a href="Aboutme.jsx" className="bg-black w-32">About me</a>
    </div>
    <div className="skills hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-9">
        <a href="Skills.jsx" className="bg-black w-32">Skills</a>
    </div>
    <div className="experience hover:bg-gradient-to-r from-blue-700 to-fuchsia-600 h-">
        <a href="Experience.jsx" className="bg-black w-32">Experience</a>
    </div>
    </div>
    </nav>

export default Navbar