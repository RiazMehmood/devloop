import { client } from "./../../sanity/lib/client";
import { projectsQuery } from "./../../sanity/queries";
import WorkClient, { Project } from "./../components/WorkClient";

const WorkPage = async () => {
  const projects: Project[] = await client.fetch(projectsQuery);

  return <WorkClient projects={projects} />;
};

export default WorkPage;
