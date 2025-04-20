import { client } from "./../../sanity/lib/client";
import { topBarQuery } from "./../../sanity/queries";
import TopBarClient from "./TopBarClient";


const TopBar = async () => {
  const data = await client.fetch(topBarQuery, {}, {
      next: { revalidate: 60 },});

  return <TopBarClient data={data} />;
};

export default TopBar;
