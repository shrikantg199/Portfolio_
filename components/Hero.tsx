"use client";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FollowerPointerCard } from "./ui/following-pointer";
const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <a href="#home">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
        <FollowerPointerCard
          title={
            <TitleComponent
              title={blogContent.author}
              avatar={blogContent.authorAvatar}
            />
          }
        >
          <div className="flex justify-center relative my-10 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }} // Adjust the duration as needed
              >
                <Image
                  src="/hero.jpg"
                  className="rounded-full"
                  width={150}
                  height={100}
                  alt="hero"
                />
              </motion.div>
              <TextGenerateEffect
                words="Full Stack Developer."
                className="text-center text-xl font-mono md:text-2xl lg:text-3xl"
              />
              <p className="text-center font-serif md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi! I&apos;m Shrikant Gaikwad, React Native(EXPO) | NextJS |
                NodeJS | React-Js Developer.
              </p>
              <hr className="md:w-[400px] w-60  p-2 my-2 justify-center h-4 z-10 items-center flex mx-auto" />{" "}
              <div className="flex gap-6 py-3 md:py-1  justify-center items-center">
                <Link
                  href={"https://www.linkedin.com/in/contactshrikantgaikwad/"}
                >
                  <FaLinkedin className="text-3xl " />
                </Link>
                <Link href={"https://github.com/shrikantg199"}>
                  <IoLogoGithub className="text-3xl " />
                </Link>
                <Link href={"https://twitter.com/its_shri__11"}>
                  <RiTwitterXLine className="text-3xl " />
                </Link>
              </div>
              <a href="#projects">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </FollowerPointerCard>
      </a>
    </div>
  );
};
export default Hero;
const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Shrikant Gaikwad",
  date: "04th April, 2024",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/photo.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="32"
      width="32"
      alt="thumbnail"
      className=" rounded-full border-2 border-white"
    />
    <h1>{title}</h1>
  </div>
);
