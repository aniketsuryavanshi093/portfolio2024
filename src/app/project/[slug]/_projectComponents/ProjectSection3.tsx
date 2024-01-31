"use client";
import { projectdetail } from "@/app/Constant";
import SectionWrapper from "@/app/hoc/StaggerContainer";
import { useIsBreakpointActive } from "@/app/hooks/useTailwindBreakpoint";
import { useParams } from "next/navigation";
import React from "react";

const ProjectSection3 = () => {
  const breakpoint = useIsBreakpointActive();
  const { slug } = useParams();
  const projectinfo = projectdetail[`${slug}`];
  return (
    <>
      <div className="">
        <div
          className=" h-[60vh] w-full flex justify-center flex-col relative align-start  lg:h-[100vh]"
          style={{
            backgroundImage: "url('/images/projects/projectbg2.png')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className=" lg:mb-72 w-[90%] ">
            <p className="lg:text-3xl text-xl text-right">Important Feature:</p>
            <p className="text-mainpara   text-right lg:text-3xl text-xl">
              {projectinfo?.projectredbackgroundsection?.sectiontitle}
            </p>
            <p className="lg:my-7  section3para w-full text-sm lg:text-lg mt-3 text-mainpara  text-right ">
              {projectinfo?.projectredbackgroundsection?.sectiondesc}
            </p>
          </div>
          {breakpoint !== "mb" && (
            <div className="rotated-div xl:top-[50%] xl:left-[0%] absolute flex flex-col gap-3 h-auto">
              <div className="flex justify-center align-center">
                <div className="imagemobile"></div>
              </div>
              <div className="flex justify-center gap-3 align-center">
                <div className="imagemobile"></div>
                <div className="imagemobile"></div>
              </div>
              <div className="flex justify-center  gap-3  align-center">
                <div className="imagemobile"></div>
                <div className="imagemobile"></div>
                <div className="imagemobile"></div>
              </div>
              <div className="flex justify-center  gap-3  align-center">
                <div className="imagemobile"></div>
                <div className="imagemobile"></div>
              </div>
              <div className="flex justify-center  gap-3  align-center">
                <div className="imagemobile"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {breakpoint !== "mb" && <div className="h-[50vh]"></div>}
    </>
  );
};

export default SectionWrapper(
  ProjectSection3,
  "projectinfo3",
  "  2xl:w-[100%] py-5 md:mt-[100px]  xl:mt-[220px] mt-[120px] "
);
