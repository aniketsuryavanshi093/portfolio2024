'use client'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'

const ProjectSection3 = () => {
    return (
        <>
            <div className=''>
                <div className=' relative w-full flex justify-center flex-col relative align-start  lg:h-[100vh]' style={{ backgroundImage: "url('/images/projects/projectbg2.png')", backgroundSize: "100% 100%" }}>
                    <div className="mb-72 w-[90%]">
                        <p className='text-3xl text-right'>Section Title:</p>
                        <p className='text-mainpara   text-right text-3xl'>Add a Subtitle</p>
                        <p className='my-7 section3para w-full text-lg text-mainpara  text-right '>
                            Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
                        </p>
                    </div>
                    <div className='rotated-div xl:top-[50%] xl:left-[-8%] absolute flex flex-col gap-3 h-auto'>
                        <div className='flex justify-center align-center'>
                            <div className='imagemobile'></div>
                        </div>
                        <div className='flex justify-center gap-3 align-center'>
                            <div className='imagemobile'></div>
                            <div className='imagemobile'></div>
                        </div>
                        <div className='flex justify-center  gap-3  align-center'>
                            <div className='imagemobile'></div>
                            <div className='imagemobile'></div>
                            <div className='imagemobile'></div>
                        </div>
                        <div className='flex justify-center  gap-3  align-center'>
                            <div className='imagemobile'></div>
                            <div className='imagemobile'></div>
                        </div>
                        <div className='flex justify-center  gap-3  align-center'>
                            <div className='imagemobile'></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='h-[50vh]'></div>
        </>
    )
}

export default SectionWrapper(ProjectSection3, "projectinfo3", "  2xl:w-full py-5 md:mt-[100px]  xl:mt-[220px] ps-4")