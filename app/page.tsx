"use client";
import { useState, useEffect } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Loader from "@/components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto md:px-4 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <TracingBeam className="">
                <Hero />   
                <Grid /> 
                <RecentProjects />
                <Skills />
                <Approach />
                <Footer />
              </TracingBeam>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
