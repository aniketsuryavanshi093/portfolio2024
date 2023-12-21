/* eslint-disable @next/next/no-img-element */
"use client";
import SectionWrapper from "@/app/hoc/StaggerContainer";
import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "@/app/utils";
import "./mymproject.scss";
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="w-full">
      <motion.p
        variants={zoomIn(0.6, 0.75)}
        className="text-2xl  text-center w-full"
      >
        Projects
      </motion.p>
      <div className="flex lg:flex-row flex-col xl:justify-start justify-between  gap-4 mt-9 align-center">
        <Link
          href={"project/tasksphere"}
          prefetch={false}
          className="projectcard lg:rounded-[30px] rounded-[10px] p-1 flex-1"
        >
          <Image
            src="/images/project1.png"
            className="lg:rounded-[30px] rounded-[10px]"
            unoptimized
            width={100}
            height={250}
            alt="project1"
          />
          <div className="lg:w-[80%] w-full m-auto flex justify-start my-3 gap-4 align-center">
            <Image
              alt="scale"
              unoptimized
              width={30}
              height={30}
              className="w-[30px] scaleimage"
              src={"/images/scale.png"}
            />
            <div className="flex flex-col align-start justify-center">
              <p
                className=" 
                            lg:text-lg text-sm"
              >
                TaskSphere (twilio)
              </p>
              <p className="lg:text-base  xl:text-lg text-sm text-mainpara">
                My Design Projects
              </p>
            </div>
          </div>
        </Link>
        <Link
          href={"project/upwork"}
          prefetch={false}
          className="projectcard lg:rounded-[30px] rounded-[10px] p-1 flex-1"
        >
          <Image
            src="/images/project2.png"
            className="lg:rounded-[30px] rounded-[10px]"
            unoptimized
            width={100}
            height={250}
            alt="project1"
          />
          <div className="lg:w-[80%] w-full m-auto flex justify-start my-3 gap-4 align-center">
            <Image
              alt="scale"
              unoptimized
              width={30}
              height={30}
              className="w-[30px] scaleimage"
              src={"/images/scale.png"}
            />
            <div className="flex flex-col align-start justify-center">
              <p
                className=" 
                           lg:text-lg text-sm"
              >
                FreelanceWeb (Upwork)
              </p>
              <p
                className=" 
                             lg:text-base  xl:text-lg text-sm text-mainpara"
              >
                My Design Projects
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex mt-14 lg:flex-row flex-col gap-4 flex-row justify-between items-center">
        <div className="w-10/12 lg:w-1/2 flex flex-col items-center" >
                <p className="text-lg">My Streak</p>
                <img className="w-full h-32 lg:h-52 mt-3" src="https://github-readme-streak-stats.herokuapp.com/?user=aniketsuryavanshi093&theme=dark" alt="everly-gif" width="70%"></img>
        </div>
        <div className="w-10/12 lg:w-1/2  flex flex-col items-center">
            <p className="text-lg">
                My Git stats
            </p>
            <img className="w-full h-32 lg:h-52 mt-3" src="https://github-readme-stats.vercel.app/api?username=aniketsuryavanshi093&show_icons=true&locale=en&theme=dark" alt="everly-gif" ></img>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(
  MyProjects,
  "projects",
  "flex justify-between lg:w-[90%] w-full py-5 flex-col md:mt-[100px] px-4"
);
