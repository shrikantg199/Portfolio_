"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  return (
    <div className="py-20" id="projects">
      <h1 className="heading ">
        <span className="text-[#7743db] text-3xl md:text-5xl">{"<"}</span>
        <span className="text-purple md:text-5xl text-3xl">Projects </span>
        <span className="text-[#7743db] text-3xl md:text-5xl">{"/>"}</span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-12">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-[#7743db] text-white shadow-lg shadow-purple/25"
              : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveFilter("app")}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeFilter === "app"
              ? "bg-[#7743db] text-white shadow-lg shadow-purple/25"
              : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
          }`}
        >
          Apps
        </button>
        <button
          onClick={() => setActiveFilter("website")}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeFilter === "website"
              ? "bg-[#7743db] text-white shadow-lg shadow-purple/25"
              : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
          }`}
        >
          Websites
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {filteredProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href="https://twitter.com/mannupaaji"
              className=""
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image width={100} height={100} src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  src={item.img}
                  width={1080}
                  height={720}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover "
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        width={1080}
                        height={720}
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>

                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
