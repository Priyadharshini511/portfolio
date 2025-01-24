const Contact = () => (
    <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 py-16 px-8 bg-animate-gradient">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">Contact Me</h2>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
          I’d love to hear from you! Feel free to reach out if you have any questions or project ideas you'd like to discuss.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border-2 border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border-2 border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 rounded-lg border-2 border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  