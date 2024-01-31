"use client"
import { projectdetail } from '@/app/Constant'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const ProjectSection2 = () => {
    const { slug } = useParams()
    const projectinfo = projectdetail[`${slug}`]
    return (
        <div className=' '>
            <div className='flex gap-5 lg:gap-0 justify-between flex-col lg:flex-row align-center w-[90%] m-auto '>
                <div className='w-full lg:w-1/2 flex'>
                    <div className='mobileimagedivoverlap w-[240px]  h-[366px] lg:w-[302px]  lg:h-[566px]'>
                    </div>
                    <div className='mobileimagedivoverlap w-[240px]  h-[366px] lg:w-[302px]  lg:h-[566px] div2'>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className=' w-full lg:w-[80%] m-auto'>
                        <p className='lg:text-2xl text-center xl:text-3xl text-[21px]'>{projectinfo?.title} <span className='text-mainpara'> {projectinfo.projectsection2info.subtitle}</span></p>
                        <p className='lg:my-10 my-3 text-center text-lg text-mainpara'>
                            {projectinfo?.projectsection2info?.desc}
                        </p>
                        <div className='w-full flex justify-center m-auto'>
                            <Link href={projectinfo.projectsection2info.link} target='_blank' className='text-center redirectbtn m-auto py-2'>Visit --> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' h-[80vh] w-full mt-8 lg:mt-0 flex justify-center flex-col relative align-center lg:h-[100vh]' style={{ backgroundImage: "url('/images/projects/projectbg1.png')", backgroundSize: "100% 100%" }}>
                <div className=" mb-16 lg:mb-36">
                    <p className='text-xl xl:text-3xl  text-center'>Section Title:</p>
                    <p className='text-mainpara   text-center lg:text-2xl xl:text-3xl text-xl'>Add a Subtitle</p>
                    <p className='my-3 lg:my-7 w-[80%] lg:w-[65%] m-auto text-sm lg:text-lg text-mainpara  text-center '>
                        {projectinfo?.projectFeaturessection?.desc}
                    </p>
                </div>
                <div className='p-2 addsectionmainproblem lg:top-[60%]  top-[70%] lg:h-[450px] xl:h-[500px] h-[300px] lg:rounded-[30px] rounded-[20px] absolute w-[95%] lg:w-4/5'>
                    <div className=' addsectionmainproblemimage lg:rounded-[30px] rounded-[20px] '></div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(ProjectSection2, "projectinfo2", " xl:w-[95%] 2xl:w-[93%] mx-auto py-5 md:mt-[100px]  xl:mt-[100px]   px-4")