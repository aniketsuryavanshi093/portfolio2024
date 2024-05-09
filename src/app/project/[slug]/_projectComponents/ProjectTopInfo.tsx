"use client";
import SectionWrapper from "@/app/hoc/StaggerContainer";
import React from "react";
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "@/app/utils";
import Image from "next/image";
import "./projecttop.scss";
import { useParams } from "next/navigation";
import { projectdetail } from "@/app/Constant";

const ProjectTopInfo = () => {
  const { slug } = useParams();
  const projectinfo = projectdetail[`${slug}`];
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row  align-center justify-between lg:mb-28 mb-7">
        <motion.div
          variants={textVariant()}
          className="flex flex-col gap-6 lg:w-2/5 w-full align-start  z-[9999999]  justify-start"
        >
          <p className="lg:text-2xl xl:text-3xl text-xl flex text-white whitespace-nowrap">
            {projectinfo?.title}
          </p>
          <p className="text-mainpara">{projectinfo?.projectintrodesc}</p>
        </motion.div>
        <motion.div
          variants={zoomIn(0.5 * 1, 1.5)}
          className="_container flex justify-center align-center rounded-xl lg:w-2/5 w-full relative"
        >
          <Image
            width={400}
            height={400}
            unoptimized
            objectFit="cover"
            className="project-pic rounded-xl !object-cover"
            src={projectinfo?.projectintroimage}
            alt="Profile Picture"
          />
        </motion.div>
      </div>
      <div className="w-full  fullimage2 lg:rounded-[40px] lg:w-[80%] rounded-[12px]  p-1 lg:p-2">
        <Image
          src={projectinfo?.projectsection2image}
          width={100}
          className="lg:rounded-[40px] rounded-[12px] "
          height={233}
          unoptimized
          alt={"project 2"}
        />
      </div>
    </>
  );
};

export default SectionWrapper(
  ProjectTopInfo,
  "projectinfo",
  " w-full  lg:w-[95%] 2xl:w-[93%] mx-auto  py-5 md:mt-[60px]  xl:mt-[40px] 2xl:mt-[40px]  px-4"
);
