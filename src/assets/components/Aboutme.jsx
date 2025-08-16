import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
const Aboutme = () => (
  <div className="bg-black text-white">
    <div className="about">
      <div className="welcome text-5xl">
        <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text text-transparent font-bold">
          About Me
        </p>
      </div>
  <div
    id="main"
    className="main flex flex-col-reverse md:justify-between md:flex-row p-2 md:h-screen bg-black text-white"
    style={{borderBottom: "2px solid rgba(255, 255, 255, 0.5)"}}
    >
      <div className="descr md:w-5/12">
        <p className="md:text-3xl text-2xl mt-5">
          My name is Unika Dhungana and I am currently a student.
          <span className="text-5xl block mt-10 mb-5 text-gray-300">
            Education
          </span>
          I completed my middle and highschool in Aadarsha Secondary School and
          am currently studying Bachelor in Computer Application in Birat
          Kshitiz College
        </p>
      </div>
    <div className="img md:w-6/12">
      <img src="./src/assets/placeholder.svg" alt="" />
    </div>
    </div>
  </div>
    </div>
);

export default Aboutme;
