"use client";

import React, { useState } from "react";
import { FaGithub, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiSanity } from "react-icons/si";
import { Dialog } from "@headlessui/react";

const projects = [
  {
    title: "Portfolio Website",
    image: "/images/project1.jpg",
    github: "https://github.com/yourusername/portfolio",
    stack: "Next.js",
    description: "A personal portfolio built with Next.js and TailwindCSS.",
  },
  {
    title: "Python Weather App",
    image: "/images/project2.jpg",
    github: "https://github.com/yourusername/weather-app",
    stack: "Python",
    description: "A CLI weather app that fetches real-time data using Python.",
  },
  {
    title: "E-commerce Frontend",
    image: "/images/project3.jpg",
    github: "https://github.com/yourusername/ecommerce-frontend",
    stack: "Next.js",
    description: "Frontend for an online store using Next.js and Stripe integration.",
  },
  {
    title: "Blog CMS",
    image: "/images/project4.png",
    github: "https://github.com/yourusername/blog-cms",
    stack: "Sanity",
    description: "Blog CMS using Sanity.io with rich content editing.",
  },
];

const stackIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs className="text-black text-xl" />,
  Python: <FaPython className="text-yellow-500 text-xl" />,
  Sanity: <SiSanity className="text-red-500 text-xl" />,
};

const stacks = ["All", "Next.js", "Python", "Sanity"];

const WorkPage: React.FC = () => {
  const [selectedStack, setSelectedStack] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<
    typeof projects[0] | null
  >(null);

  const filteredProjects =
    selectedStack === "All"
      ? projects
      : projects.filter((p) => p.stack === selectedStack);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Section */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-4xl mt-2 font-bold mb-3">Our Work</h2>
        <p className="text-gray-600 text-lg">
          Explore our latest projects built using modern tech like Next.js,
          Python, and more. Click on any project for details.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-4 py-1 rounded-full text-sm border ${
              selectedStack === stack
                ? "bg-black text-white"
                : "bg-white text-black"
            } hover:bg-black hover:text-white transition`}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-600">{project.stack}</span>
                {stackIcons[project.stack] || (
                  <span className="text-gray-500 text-xl">?</span>
                )}
              </div>
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-2 text-sm"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        {selectedProject && (
          <Dialog.Panel className="bg-white rounded-xl shadow-xl max-w-lg p-6 mx-4">
            <Dialog.Title className="text-2xl font-bold mb-2">
              {selectedProject.title}
            </Dialog.Title>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Built with: {selectedProject.stack}
                </span>
                {stackIcons[selectedProject.stack] || (
                  <span className="text-gray-500 text-xl">?</span>
                )}
              </div>
              <a
                href={selectedProject.github}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                View GitHub →
              </a>
            </div>
          </Dialog.Panel>
        )}
      </Dialog>
    </div>
  );
};

export default WorkPage;
