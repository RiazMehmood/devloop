"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image"; // Import next/image

type TechStack = {
  _id: string;
  name: string;
  iconUrl?: {
    asset: {
      url: string;
    };
  };
};

export type Project = {
  _id: string;
  title: string;
  description: string;
  github: string;
  image: {
    asset: {
      url: string;
    };
  };
  stack: Array<TechStack>;
};

const WorkClient: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [selectedStack, setSelectedStack] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const uniqueStacks: string[] = [
    "All",
    ...Array.from(
      new Set(
        projects.flatMap((project) =>
          project.stack.map((tech) => tech.name)
        )
      )
    ),
  ];

  const filteredProjects =
    selectedStack === "All"
      ? projects
      : projects.filter((project) =>
          project.stack.some((tech) => tech.name === selectedStack)
        );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-3">Our Work</h2>
        <p className="text-gray-600 text-lg">
          Explore our latest projects built using modern tech stacks. All content is powered by Sanity CMS.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {uniqueStacks.map((stack) => (
          <button
            key={stack}
            onClick={() => setSelectedStack(stack)}
            className={`px-4 py-1 rounded-full text-sm border font-medium ${
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
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.image.asset.url}
              alt={project.title}
              width={500}
              height={300}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {project.stack.map((tech) => (
                  <div key={tech._id} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                    {tech.iconUrl?.asset?.url && (
                      <Image
                        src={tech.iconUrl.asset.url}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    <span className="text-xs text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        {selectedProject && (
          <Dialog.Panel className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 mx-4 overflow-y-auto max-h-[90vh]">
            <Dialog.Title className="text-2xl font-bold mb-2 text-gray-900">
              {selectedProject.title}
            </Dialog.Title>
            <Image
              src={selectedProject.image.asset.url}
              alt={selectedProject.title}
              width={800}
              height={600}
              className="rounded mb-4"
            />
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {selectedProject.description}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                {selectedProject.stack.map((tech) => (
                  <div key={tech._id} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                    {tech.iconUrl?.asset?.url && (
                      <Image
                        src={tech.iconUrl.asset.url}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    <span className="text-xs text-gray-700">{tech.name}</span>
                  </div>
                ))}
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

export default WorkClient;
