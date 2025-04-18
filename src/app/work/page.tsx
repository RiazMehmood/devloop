import { client } from "./../../sanity/lib/client";
import { projectsQuery } from "./../../sanity/queries";
import WorkClient, { Project } from "./../components/WorkClient";

const WorkPage = async () => {
  const projects: Project[] = await client.fetch(projectsQuery);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-4xl mt-2 font-bold mb-3">Our Work</h2>
        <p className="text-gray-600 text-lg">
          Explore our latest projects built using modern tech like Next.js,
          Python, and more. Click on any project for details.
        </p>
      </div>

      <WorkClient projects={projects} />
    </div>
  );
};

export default WorkPage;
