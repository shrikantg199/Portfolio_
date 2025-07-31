"use client";

import React from "react";
import Marquee from "./magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
const reviews = [
  {
    name: "HTML",
    img: "/html.png",
  },
  {
    name: "CSS",
    img: "/css.png",
  },
  {
    name: "Tailwind CSS",
    img: "/tailwind.png",
  },
  {
    name: "Javascript",
    img: "/javascript.png",
  },
  {
    name: "ReactJS",
    img: "/React.png",
  },
  {
    name: "Nodejs",
    img: "/nodejs.png",
  },
  {
    name: "MongoDB",
    img: "/Mongodb.png",
  },
  {
    name: "MySQL",
    img: "/MySQL.png",
  },
  {
    name: "Postman",
    img: "/Postman.png",
  },
];
const thirdLength = Math.ceil(reviews.length / 3);

const firstRow = reviews.slice(0, thirdLength);
const secondRow = reviews.slice(thirdLength, thirdLength * 2);
const thirdRow = reviews.slice(thirdLength * 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-xl   p-4",
        // light styles
        "border-[#000319] bg-white text-black hover:bg-[#000319] hover:text-white  border border-gray-500/10"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center mx-auto gap-1 ">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={`${name} skill icon`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium  ">{name}</figcaption>
        </div>
      </div>
    </figure>
  );
};
const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading ">
        <span className="text-[#7743db] text-3xl md:text-5xl">{"<"}</span>
        <span className="text-purple md:text-5xl text-3xl">Skills</span>
        <span className="text-[#7743db] text-3xl md:text-5xl">{"/>"}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative bg-[#000319] flex h-full w-screen md:w-[85vh] flex-col items-center justify-center overflow-hidden    py-20 ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-[#000319]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-[#000319]"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
