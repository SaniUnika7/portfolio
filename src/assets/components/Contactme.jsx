import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const sendmsg = () =>
    alert("Message is sent!!")

const Contactme = () => (
  <div className="contact h-screen bg-black text-white">
    <div className="heading text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-pink-700">
      Contact me
    </div>
    <div className="form md:mt-2">
      <div
        id="form"
        className="form p-12 h-full"
        style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
      >
        <h1 className="text-4xl">Please give your Feedback or concerns here</h1>
        <div className="form-elements flex flex-col gap-5">
          <div className="name flex gap-3 md:mt-2 items-center border-2 h-10 md:w-3/12">
          <FontAwesomeIcon icon={faUser}/>
            <input
              type="text"
              placeholder="Name"
              className=" focus:outline-none"
            />
          </div>
          <div className="email flex gap-3 items-center border-2 h-10 md:w-3/12">
          <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="text"
              placeholder="Email Address"
              className="h-8 p-2 focus:outline-none"
            />
          </div>
          <div className="textarea flex border-2 gap-2 border-white">
            <FontAwesomeIcon icon={faPenToSquare}/>
          <textarea
            name="feedback"
            id="feedback"
            placeholder="Feedback"
            style={{ width: "90vw" }}
            className="h-40 w-96 mb-2 border-0 focus:outline-none"
            ></textarea>
            </div>
          <div className="btn bg-black text-white md:w-52 md:h-10 rounded-2xl text-center p-2 md:float-right">
            <button onClick={sendmsg} className="hover:border-2 p-4 hover:border-purple-500 hover:bg-clip-text hover:text-transparent border-2 border-black text-white text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contactme;
