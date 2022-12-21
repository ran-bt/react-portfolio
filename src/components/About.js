const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  ">
          <div>
            <p className="sm:text-right text-4xl font-bold pl-4">
              Full Stack Developer
            </p>
          </div>
          <div>
            <p>
              I'm a full stack web developer, and ex-Shopify advisor with a
              passion for ecommerce and digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
