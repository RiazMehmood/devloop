'use client'
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useScrollVisibility } from "./ScrollProvider";

const TopBar = () => {
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
              devloop@gmail.com
            </span>
          </div>
          <div>
            Contact:{" "}
            <span className="text-[#b7f7ea] hover:text-[#a4b4b1] cursor-pointer">
              +92-307-2791683
            </span>
          </div>
        </div>
        <div className="flex space-x-3 text-[#b7f7ea] cursor-pointer">
          <Linkedin className="hover:text-[#a4b4b1]" />
          <Facebook className="hover:text-[#a4b4b1]" />
          <Twitter className="hover:text-[#a4b4b1]" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
