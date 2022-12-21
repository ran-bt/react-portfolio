import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#0abab5]">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Inran Bent
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer{" "}
        </h2>
        {/* <p className=" text-[#8892b0] py-4 max-w-[700px]">
          Full stack web developer and ex-Shopify support advisor with a
          demonstrated history in providing technical support seeking to add
          value to agile teams through solutions-oriented programming
        </p> */}
        <div>
          <Link
            to="work"
            smooth
            duration={500}
            offset={-200}
            className="group text-white border-2 px-6 py-3 w-fit my-2 flex items-center hover:bg-[#0abab5] "
          >
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
