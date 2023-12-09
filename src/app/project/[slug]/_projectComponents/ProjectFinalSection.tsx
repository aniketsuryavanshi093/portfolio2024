'use client'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'

const ProjectFinalSection = () => {
    return (
        <div className=' w-full '>
            <div className='flex justify-center flex-col align-center gap-4 w-[60%] m-auto'>
                <p className='text-3xl'>Section title <span className='text-mainpara'>with different styles</span></p>
                <p className='text-center text-mainpara text-base'>
                    Explain an important feature of the project and show some image variations to showcase your versatile solution to a problem.
                </p>
            </div>
            <div className='showfinalimage m-auto mt-7 rounded-xl w-[80%] h-[400px]'></div>
            <div className='w-full flex justify-center flex-col relative align-start lg:h-[80vh]' style={{ backgroundImage: "url('/images/projects/bottomrectangle.png')", backgroundSize: "100% 100%" }}>
                <div className='w-[80%] mx-auto'>
                    <p className='text-2xl'>Takeaway:</p>
                    <p className='text-mainpara text-2xl'>And a subtitle</p>
                </div>
                <p className='text-mainpara w-[80%] mx-auto mt-8'>
                    Write about what you’ve learned during this project, what are the main takeaways and what will you do differently in your next projects.
                </p>
            </div>
        </div>
    )
}

export default SectionWrapper(ProjectFinalSection, "projectinfofinal", "xl:w-[95%] 2xl:w-[93%] py-5 md:mt-[100px]  xl:mt-[100px]   px-4")
