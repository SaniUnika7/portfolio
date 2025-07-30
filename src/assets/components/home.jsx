const Home = () => (
  <div className="ml-12 homeMain bg-black">
    <div className="intro mt-28 text-5xl absolute">
      <p className="name text-white font-bold">
        Hi,
        <br /> I'm Unika Dhungana,
      </p>
      <div className="skill-container overflow-hidden mt-3 font-bold">
        <div className="skills scroll-up-down">
          <p className="skill-1 bg-gradient-to-r from-blue-500 hideothers via-purple-500 to-pink-700 bg-clip-text h-14 text-transparent font-bold text-5xl">
            Full stack Developer
          </p>
          <p className="skill-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text h-14 text-transparent font-bold text-5xl">
            Web Developer
          </p>
          <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text h-20 text-transparent font-bold text-5xl">
            Graphic Designer
          </p>
        </div>
      </div>
      <p className="desc !text-2xl !font-small mt-7 text-gray-300 w-5/12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        dolores ut dolorem nobis! Dolore porro quod, suscipit incidunt sequi
      </p>
      <button className="hover:bg-white text-white text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full m-5 hover:text-black p-5">Download CV</button>
    </div>
    <div className="img flex w-full mt-20 justify-end">
      <div className="outer-border flex justify-center items-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700">
        {/* <div className="forblackborder bg-black rounded-full flex justify-center items-center"> */}
        <div className="image bg-gradient from-blue-500 via-purple-500 to-pink-700 rounded-full overflow-hidden border-black">
          <img
            src="./src/assets/picture.png"
            className="h-96"
            alt="A picture"
          />
        </div>
      </div>
    </div>
  </div>
  // </div>
);

export default Home;
