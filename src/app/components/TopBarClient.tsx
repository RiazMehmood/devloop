'use client';
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useScrollVisibility } from "./ScrollProvider";

interface TopBarData {
  email: string;
  phone: string;
  linkedin: string;
  facebook: string;
  twitter: string;
}

const TopBarClient = ({ data }: { data: TopBarData }) => {
  const isVisible = useScrollVisibility();

  return (
    <div
      className={`fixed top-0 w-full z-50 bg-[#353a40] text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-4">
        <div className="md:flex space-x-4 text-sm">
          <div>
            Email:{" "}
            <span className="text-[#b7f7ea] hover:text-[#a4b4b1] cursor-pointer">
              {data?.email}
            </span>
          </div>
          <div>
            Contact:{" "}
            <span className="text-[#b7f7ea] hover:text-[#a4b4b1] cursor-pointer">
              {data?.phone}
            </span>
          </div>
        </div>
        <div className="flex space-x-3 text-[#b7f7ea]">
          <a href={data?.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-[#a4b4b1]" />
          </a>
          <a href={data?.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-[#a4b4b1]" />
          </a>
          <a href={data?.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="hover:text-[#a4b4b1]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBarClient;
