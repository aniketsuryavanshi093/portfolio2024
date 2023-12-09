"use client"
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'

const ProjectSection2 = () => {
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
                        <p className='lg:text-2xl text-center xl:text-3xl text-[21px]'>TaskSphere <span className='text-mainpara'> and some additional information</span></p>
                        <p className='lg:my-10 my-3 text-center text-lg text-mainpara'>
                            Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution? <br />
                            <span className='text-base'>You can additionally provide more details, but try to be brief. Nobody wants to read long texts, so it’s crucial to have a good balance of images and texts.</span>
                        </p>
                        <div className='w-full flex justify-center m-auto'>

                            <button className='redirectbtn m-auto py-2'>Visit --> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-8 lg:mt-0 flex justify-center flex-col relative align-center lg:h-[100vh]' style={{ backgroundImage: "url('/images/projects/projectbg1.png')", backgroundSize: "100% 100%" }}>
                <div className="mb-36">
                    <p className='text-2xl xl:text-3xl  text-center'>Section Title:</p>
                    <p className='text-mainpara   text-center lg:text-2xl xl:text-3xl text-xl'>Add a Subtitle</p>
                    <p className='my-7 w-[65%] m-auto text-lg text-mainpara  text-center '>
                        Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
                    </p>
                </div>
                <div className='p-2 addsectionmainproblem absolute w-4/5'>
                    <div className=' addsectionmainproblemimage'></div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(ProjectSection2, "projectinfo2", " xl:w-[95%] 2xl:w-[93%] py-5 md:mt-[100px]  xl:mt-[100px]   px-4")