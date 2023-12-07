"use client"
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'

const ProjectSection2 = () => {
    return (
        <div>
            <div className='flex justify-between align-center w-[90%] m-auto '>
                <div className='w-1/2 flex'>
                    <div className='mobileimagedivoverlap'>

                    </div>
                    <div className='mobileimagedivoverlap div2'>

                    </div>
                </div>
                <div className=' w-1/2'>
                    <div className='w-[80%] m-auto'>
                        <p className='text-3xl'>TaskSphere <span className='text-mainpara'> and some additional information</span></p>
                        <p className='my-10 text-lg text-mainpara'>
                            Explain what your project is about: what kind of problem does it solve, who is the target group, and how does it provide a sufficient solution? <br />
                            <span className='text-base'>You can additionally provide more details, but try to be brief. Nobody wants to read long texts, so it’s crucial to have a good balance of images and texts.</span>
                        </p>
                        <button className='redirectbtn py-2'>Visit --> </button>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center flex-col relative align-center lg:h-[100vh]' style={{ backgroundImage: "url('/images/projects/projectbg1.png')", backgroundSize: "100% 100%" }}>
                <div className="mb-36">
                    <p className='text-3xl text-center'>Section Title:</p>
                    <p className='text-mainpara   text-center text-3xl'>Add a Subtitle</p>
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