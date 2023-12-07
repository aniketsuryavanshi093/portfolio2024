"use client"
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'

const ProjectSection2 = () => {
    return (
        <div className='flex justify-between align-center w-[90%] m-auto '>
            <div className='w-1/2'>
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
    )
}

export default SectionWrapper(ProjectSection2, "projectinfo2", " xl:w-[95%] 2xl:w-[93%] py-5 md:mt-[100px]  xl:mt-[100px]   px-4")