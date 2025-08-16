import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faTv,
  faAtom,
  faRodSnake,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
// import Skills from "./skills";

const skillsarr = [
  {
    skillIcon: faLaptop,
    skillName: "HTML",
    skilldesc: "Lorem ipsum dolor sit amet.",
  },
  {
    skillIcon: faTv,
    skillName: "CSS",
    skilldesc: "Lorem ipsum dolor sit amet.",
  },
  {
    skillIcon: faPaperPlane,
    skillName: "JavaScript",
    skilldesc: "Lorem ipsum dolor sit amet.",
  },
  {
    skillIcon: faAtom,
    skillName: "React",
    skilldesc: "Lorem ipsum dolor sit amet.",
  },
  {
    skillIcon: faRodSnake,
    skillName: "Python",
    skilldesc: "Lorem ipsum dolor sit amet.",
  },
];
const SkillCard = (props) => (
  <div
    id="skill"
    className="skillcard md:h-screen  bg-black p-2 text-white"
    style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.5)" }}
  >
    <div className="heading bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 text-5xl font-bold bg-clip-text text-transparent w-6/12">
      Skills
    </div>
    <div className="cards flex flex-wrap h-10/12 gap-5 justify-center">
      {skillsarr.map((skill) => (
        <div className="skill1-border md:h-5/12  md:w-3/12 p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700">
          <div key={skillsarr} className="skill-iterate h-full bg-black text-center rounded-2xl p-2">
            <div
              className="skill2 flex flex-col gap-5 text-white"
              
            >
              <FontAwesomeIcon
                key={skillsarr}
                icon={skill.skillIcon}
                className="text-3xl ml-auto mr-auto text-pink-500"
              />
              <p className="text-xl">{skill.skillName}</p>
              <div className="skilldesc">{skill.skilldesc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;
