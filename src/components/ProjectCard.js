export default function ProjectCard({ title, description, link }) {
    return (
      <a href={link} target="_blank" className="block p-4 bg-gray-800 rounded-lg hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-neonPurple">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </a>
    );
  }
  