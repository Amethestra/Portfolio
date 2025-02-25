"use client";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "AI Chatbot", description: "A smart chatbot using NLP.", link: "#" },
  { title: "Portfolio Website", description: "My personal portfolio site.", link: "#" },
];

export default function Projects() {
  return (
    <div className="projects-page animated-bg min-h-screen text-white">
      <Navbar />

      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-neonBlue text-center glow-text mt-6">My Coding Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
