const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-[#fefffe] py-16"
    >
      <h2 className="text-4xl font-bold text-[#12130F] mb-10 text-center">
        Contact
      </h2>

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Introduction container with text */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 flex items-center mb-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-lg text-white">
              Let's <span className="text-blue-400">connect!</span> Feel free to
              reach out for collaborations or inquiries.
            </p>
          </div>
        </div>

        {/* Form container */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div>
                <label className="block text-blue-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-blue-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-blue-400 mb-2">Subject</label>
              <input
                type="text"
                placeholder="What is this regarding?"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-blue-400 mb-2">Message</label>
              <textarea
                placeholder="Your message here..."
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
