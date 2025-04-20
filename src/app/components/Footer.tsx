
import { topBarQuery } from "./../../sanity/queries";
import FooterClient from "./FooterClient";
import { client } from "./../../sanity/lib/client";

const Footer = async () => {
  const data = await client.fetch(topBarQuery, {}, {
    next: { revalidate: 86400 },});
  return <FooterClient data={data} />;
};

export default Footer;
