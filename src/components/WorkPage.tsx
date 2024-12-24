export default function WorkPage() {
  const projects = [
    { name: "Learn Crypto Trading", description: "An interactive platform for crypto education.", tech: ["React", "Node.js", "MongoDB"] },
    { name: "Qubic Extension", description: "Browser extension for enhanced productivity.", tech: ["JavaScript", "Chrome API"] },
    { name: "Metadomo AI", description: "AI-powered home automation system.", tech: ["React", "TensorFlow.js", "IoT"] },
  ];

  return (
    <div className="font-inter text-sm sm:text-base">
      <h2 className="font-hedvig-letters-serif text-2xl sm:text-3xl mb-4 sm:mb-6">My Work</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-foreground/30 last:border-b-0">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs sm:text-sm px-2 py-1 bg-foreground/10 rounded">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
