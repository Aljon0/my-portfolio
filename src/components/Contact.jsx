const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-16"
    >
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Contact
      </h2>

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Introduction container with text */}
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl shadow-lg p-6 flex items-center mb-6">
          <div className="border-l-4 border-[#90D5FF] pl-4">
            <p className="text-lg text-white">
              Let's <span className="text-[#90D5FF]">connect!</span> Feel free
              to reach out for collaborations or inquiries.
            </p>
          </div>
        </div>

        {/* Form container */}
        <div className="bg-[#333333] rounded-xl shadow-lg p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div>
                <label className="block text-[#90D5FF] mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-[#90D5FF] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-[#90D5FF] mb-2">Subject</label>
              <input
                type="text"
                placeholder="What is this regarding?"
                className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-[#90D5FF] mb-2">Message</label>
              <textarea
                placeholder="Your message here..."
                className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#333333] rounded-lg text-white"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-[#90D5FF] text-white rounded-lg hover:opacity-90 transition-colors"
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
