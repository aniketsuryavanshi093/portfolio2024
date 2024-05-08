"use client";
import React from "react";
import { projectdetail } from "@/app/Constant";
import SectionWrapper from "@/app/hoc/StaggerContainer";
import { useParams } from "next/navigation";
import Image from "next/image";

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
      <div className="showfinalimage m-auto mt-7 rounded-xl lg:w-[70%] w-[90%] h-[330px] lg:h-[450px]">
        <Image
          width={200}
          height={200}
          alt="awdw"
          className="rounded-xl w-full h-full"
          unoptimized
          src={projectinfo?.projectfinalsection?.sectionimage}
        />
      </div>
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
        <p className="text-mainpara w-[80%] whitespace-pre-line mx-auto mt-8 text-base font-semibold">
          {projectinfo?.projectFooterinfo?.takeaway}
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(
  ProjectFinalSection,
  "projectinfofinal",
  " w-full lg:w-[95%] mx-auto 2xl:w-[93%] py-5 md:mt-[90px]  xl:mt-[100px]   px-4"
);
