const cvdownload = () =>
  alert("CV Downloaded!")

const Home = () => (
  <div className="md:p-4 p-2 homeMain bg-black lg:flex-row md:flex-row flex justify-center md:h-screen flex-col-reverse md:justify-between w-full" style={{borderBottom: "2px solid rgba(255, 255, 255, 0.5)"}}>
    <div className="intro md:mt-28 mt-16 text-5xl">
      <p className="name text-white font-bold">
        Hi,
        <br /> I'm Unika Dhungana,
      </p>
      <div className="skill-container md:h-16 h-28 overflow-hidden mt-3 font-bold">
        <div className="skills scroll-up-down scroll-up-down-mobile">
          <p className="skill-1 bg-gradient-to-r duration-1000 from-blue-500 hideothers via-purple-500 to-pink-700 bg-clip-text md:h-14 h-28 text-transparent font-bold text-5xl">
            Full stack Developer
          </p>
          <p className="skill-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text mt-1 h-24 text-transparent font-bold text-5xl">
            Web Developer
          </p>
          <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text h-28 text-transparent font-bold text-5xl">
            Graphic Designer
          </p>
        </div>
      </div>
      <p className="desc !text-2xl !font-small mt-7 text-gray-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        dolores ut dolorem nobis! Dolore porro quod, suscipit incidunt sequi
      </p>
      <button onClick={cvdownload} className="hover:border-2 hover:border-purple-500 hover:bg-clip-text hover:text-transparent border-2 border-black text-white text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full m-5 p-5">Download CV</button>
    </div>
    <div className="img flex w-full md:mt-20 mt-10 justify-center items-center md:justify-end">
      <div className="outer-border p-1 flex justify-center items-center w-42 h-42 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700">
        <div className=" border-8 rounded-full overflow-hidden w-full h-full">
          <img src="./src/assets/picture.png" className="" alt="A picture"/> 
        </div>
      </div>
    </div>
  </div>
);

export default Home;
