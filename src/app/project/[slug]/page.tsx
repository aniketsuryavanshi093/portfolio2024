import React from "react";
import ProjectTopInfo from "./_projectComponents/ProjectTopInfo";
import ProjectSection2 from "./_projectComponents/ProjectSection2";
import ProjectSection3 from "./_projectComponents/ProjectSection3";
import ProjectFinalSection from "./_projectComponents/ProjectFinalSection";

const Project = () => {
  return (
    <>
      <div
        className="
          pt-10 pb-10  "
      >
        <ProjectTopInfo />
        <ProjectSection2 />
        <ProjectSection3 />
        <ProjectFinalSection />
      </div>
    </>
  );
};

export default Project;
