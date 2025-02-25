"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import Loader from "@/components/Loader"; // Import Loader

export default function Contact() {
  const GITHUB_USERNAME = "Amethestra"; // Your GitHub username

  const [repos, setRepos] = useState([]);
  const [isLoadingGitHub, setIsLoadingGitHub] = useState(true);
  const [fetchErrorGitHub, setFetchErrorGitHub] = useState(false);

  // Fetch GitHub projects dynamically
  const fetchGitHubProjects = () => {
    setIsLoadingGitHub(true);
    setFetchErrorGitHub(false);

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setIsLoadingGitHub(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
        setFetchErrorGitHub(true);
        setIsLoadingGitHub(false);
      });
  };

  // Run fetch on page load
  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  return (
    <div className="contact-page min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto py-16 flex flex-col items-center">
        {/* Contact Header */}
        <h2 className="text-4xl font-bold text-neon-purple text-center glow-text">
          Let's Connect!
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Feel free to reach out through email or check out my latest projects on GitHub.
        </p>

        {/* Contact Options */}
        <div className="flex flex-row justify-center items-center gap-12 mt-6">
          {/* GitHub Link */}
          <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" className="contact-icon group">
            <FaGithub size={50} />
            <span className="contact-tooltip">GitHub</span>
          </Link>

          {/* Email Contact */}
          <Link href="mailto:your-email@example.com" className="contact-icon group">
            <FaEnvelope size={50} />
            <span className="contact-tooltip">Email Me</span>
          </Link>
        </div>

        {/* GitHub Latest Projects */}
        <div className="mt-12 w-full max-w-3xl">
          <h3 className="text-3xl font-bold text-neon-purple glow-text text-center">
            Latest GitHub Projects
          </h3>
          {isLoadingGitHub ? (
            <Loader />
          ) : fetchErrorGitHub ? (
            <div className="text-center">
              <p className="text-gray-400">Failed to load GitHub projects.</p>
              <button onClick={fetchGitHubProjects} className="retry-btn mt-4">
                Retry
              </button>
            </div>
          ) : repos.length > 0 ? (
            <div className="flex flex-col gap-8 mt-10">
              {repos.map((repo) => (
                <div key={repo.id} className="glass p-8 rounded-lg project-card text-center w-full">
                  <h4 className="text-2xl font-bold text-electric-cyan">{repo.name}</h4>
                  <p className="text-gray-400 mt-2 text-lg">{repo.description || "No description provided."}</p>
                  <Link href={repo.html_url} target="_blank" className="neon-btn mt-4 inline-block">
                    View on GitHub
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No GitHub projects found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
