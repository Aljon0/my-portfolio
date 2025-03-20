const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen flex items-center justify-center bg-[#fefffe]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#12130F] mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-[#226CE0] text-[#fefffe] rounded-full">
            React
          </span>
          <span className="px-4 py-2 bg-[#226CE0] text-[#fefffe] rounded-full">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-[#226CE0] text-[#fefffe] rounded-full">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-[#226CE0] text-[#fefffe] rounded-full">
            HTML
          </span>
          <span className="px-4 py-2 bg-[#226CE0] text-[#fefffe] rounded-full">
            CSS
          </span>
          <span className="px-4 py-2 bg-[#226CE0] text-[#fefffe] rounded-full">
            Vite
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
