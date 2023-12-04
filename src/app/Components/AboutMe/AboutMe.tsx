'use client'
import { experiences, services } from '@/app/constants'
import { motion } from "framer-motion"
import SectionWrapper from '@/app/hoc/StaggerContainer'
import { fadeIn, slideIn, zoomIn } from '@/app/utils'
import { Tilt } from 'react-tilt'
import "./aboutme.scss"
import { Progress } from '@nextui-org/react'

const AboutMe = () => {
    return (
        <div className=''>
            <motion.div variants={zoomIn(0.6, .75)} className='flex flex-col w-[20%] m-auto justify-center align-center'>
                <motion.p className='text-2xl mb-4'> About Me </motion.p>
                <motion.div variants={fadeIn("left", "spring", 1, 1)} className='flex justify-between '>
                    <motion.i variants={slideIn("left", "spring", 1.5, 1)} className="fa-brands hover:border hover:border-mainpara  mr-6 rounded-full fa-linkedin p-4 links"></motion.i>
                    <motion.i variants={slideIn("right", "spring", 1.5, 1)} className="fa-brands hover:border hover:border-mainpara fa-github links rounded-full p-4"></motion.i>
                </motion.div>
            </motion.div>
            <div className='flex mt-6 gap-10'>
                {services.map((service: { title: string, icon: string }, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
            <div className='flex mt-11   gap-10'>
                {
                    experiences.map((elem,) => (
                        <div key={elem.title} className={`w-full border rounded-xl  border-mainpara z-[99999] flex flex-col  align-center p-6`}>
                            <p className='text-2xl pb-7 text-white'>
                                {elem.title}
                            </p>
                            <div className='w-[90%] margin-auto gridexpcontent '>
                                {
                                    elem.skills.map((skills, i) => (
                                        <div key={skills.label} className={`flex ${(i + 1) % 2 === 0 ? 'ml-3' : ""} flex-col justify-start align-start`}>
                                            <div className=' w-full flex justify-start align-center'>
                                                <i className="text-blue-500 fa-regular mr-3 fa-circle-check"></i>
                                                <p className='text-lg'>{skills.label}</p>
                                            </div>
                                            <div className='w-full mt-2'>
                                                <Progress size="sm" aria-label="Loading..." value={parseInt(skills.progress)} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div className='w-full green-pink-gradient hover:border-mainpara hover:border shadow-card rounded-[20px] p-[1px]' variants={fadeIn("right", "spring", .5 * index, .75)}>
                <div className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly flex-col items-center min-h-[280px]' >
                    <img src={icon} className="object-contain w-16 h-16" />
                    <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
export default SectionWrapper(AboutMe, "about", 'flex justify-between w-[90%] py-5 flex-col md:mt-[150px] px-4')
