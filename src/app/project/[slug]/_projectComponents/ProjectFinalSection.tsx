"use client";
import React from "react";
import { projectdetail } from "@/app/Constant";
import SectionWrapper from "@/app/hoc/StaggerContainer";
import { useParams } from "next/navigation";

const ProjectFinalSection = () => {
  const { slug } = useParams();
  const projectinfo = projectdetail[`${slug}`];
  return (
    <div className="w-full">
      <div className="flex justify-center flex-col align-center gap-4 w-[80%] lg:w-[60%] m-auto">
        <p className="lg:text-3xl text-xl text-center">
          {projectinfo?.projectfinalsection?.sectiontitle}
        </p>
        <p className="text-center text-mainpara text-base">
          {projectinfo?.projectfinalsection?.sectiondesc}
        </p>
      </div>
      <div className="showfinalimage m-auto mt-7 rounded-xl lg:w-[80%] w-[90%] h-[330px] lg:h-[400px]"></div>
      <div
        className="w-full flex justify-center flex-col relative align-start lg:h-[80vh] h-[65vh]"
        style={{
          backgroundImage: "url('/images/projects/bottomrectangle.png')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-[80%] mx-auto">
          <p className="text-lg lg:text-2xl">Takeaway:</p>
        </div>
        <p className="text-mainpara w-[80%] mx-auto mt-8">
          {projectinfo?.projectFooterinfo?.takeaway}
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(
  ProjectFinalSection,
  "projectinfofinal",
  " w-full lg:w-[95%] mx-auto 2xl:w-[93%] py-5 md:mt-[100px]  xl:mt-[100px]   px-4"
);
