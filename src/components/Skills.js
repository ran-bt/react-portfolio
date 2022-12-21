import css from "../assets/css.png";
import HTML from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex-col justify-center w-fulll ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#0abab5] ">
            Skills
          </p>
          <p className="py-4">Web development experience using</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={javascript}
              alt="Javascript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={mongo} alt="MongoDB icon" className="w-20 mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={node} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Node Js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
