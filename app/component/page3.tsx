export default function SimplePortfolio() {
  // Single project data
  const project = {
    title: " Web Portfolio",
    description: "Portfolio projects are built with HTML, Tailwind, JavaScript",
    image: "/Portfolio.png?height=150&width=300",
  };

  return (
    <div id="projects" className="relative min-h-screen w-full bg-black pb-10">
      {/* Blue spotlight effect */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 transform rounded-[100%] bg-blue-500/20 blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 px-4">
        {/* Simple header */}
        <header className="py-16 text-center">
          <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        </header>

        {/* Single centered project card */}
        <div className="mx-auto max-w-sm transition-all duration-300 hover:scale-110 cursor-pointer">
          <div className="overflow-hidden rounded-lg bg-gray-900/70">
            <img
              src={project.image || "/Portfolio.png"}
              alt={project.title}
              className="h-60 w-full px-5 pt-5 rounded-tl-4xl rounded-tr-4xl object-cover"
            />
            <div className="px-5 pb-5 pt-3">
              <h3 className="mb-2 text-xl font-medium text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <br />
              <div className="flex gap-5">
                <p className="text-sm text-blue-500">#HTML</p>
                <p className="text-sm text-blue-500">#Tailwind</p>
                <p className="text-sm text-blue-500">#JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
