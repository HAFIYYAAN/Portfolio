export default function Page3() {
  const project = {
    title: "Web Portfolio",
    description: "Portfolio projects are built with HTML, Tailwind, JavaScript",
    image: "/Portfolio.png?height=150&width=300",
  };

  return (
    <div
      id="projects"
      className="relative min-h-screen w-full bg-black pb-10 px-4 sm:px-8"
    >
      {/* Blue spotlight effect */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[400px] -translate-x-1/2 transform rounded-full bg-blue-500/20 blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <header className="py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Portfolio
          </h1>
        </header>

        {/* Project card */}
        <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg transition-transform duration-300 hover:scale-110 cursor-pointer">
          <div className="overflow-hidden rounded-2xl bg-gray-900/70">
            <img
              src={project.image || "/Portfolio.png"}
              alt={project.title}
              className="h-60 w-full object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="px-5 pb-5 pt-3">
              <h3 className="mb-2 text-xl sm:text-2xl font-medium text-white">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex gap-5">
                <span className="text-sm sm:text-base text-blue-500">
                  #HTML
                </span>
                <span className="text-sm sm:text-base text-blue-500">
                  #Tailwind
                </span>
                <span className="text-sm sm:text-base text-blue-500">
                  #JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
