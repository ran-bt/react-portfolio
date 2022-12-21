const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/20dc6627-588d-4e6e-af5a-be09db51182d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 mt-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0abab5] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Shoot me an email</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="your name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="your email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder=" your message..."
        ></textarea>
        <button className="text-white border-2 hover:bg-[#0abab5] hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
