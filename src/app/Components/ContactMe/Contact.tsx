'use client'
import { contacts } from '@/app/constants'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'
import { motion } from 'framer-motion'
import "./contact.scss"
import Image from 'next/image'
import { Input } from '@nextui-org/react'
import { Tilt } from 'react-tilt'

const Contact = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-center mb-8'>
                <motion.p className='text-2xl '> Get in touch </motion.p>
            </div>
            <div className='md:flex md:flex-row flex flex-column justify-center'>
                <div className='flex-1'>
                    <div className='w-full flex gap-6 flex-col  align-end '>
                        {
                            contacts.map((elem) => (
                                <Tilt key={elem.icon} className="xs:w-[250px]  border  py-6 px-4 w-[75%] margin-auto flex flex-col justify-center align-center rounded-lg">
                                    <i className={`${elem.icon} text-lg`} />
                                    <p className='text-xl pt-5 pb-1'>{elem.label}</p>
                                    <p className='text-mainpara  text-base '>{elem.content}</p>
                                </Tilt>
                            ))
                        }
                    </div>
                </div>
                <div className='flex-[2] w-full flex justify-end'>
                    <div className='w-[60%]  p-5 contactbg'>
                        <div className='flex justify-center'>
                            <p className='w-full text-center text-2xl  text-orange-400'>Contact Me</p>
                            <i className="fa-solid fa-star text-2xl text-orange-400"></i>
                        </div>
                        <div className='flex flex-col'>
                            <Input type="text" variant={'underlined'} label="Name" />
                            <Input type="email" variant={'underlined'} label="Email" />
                            <Input type="text" variant={'underlined'} label="Phone Number" />
                            <button className='w-full contactbtn'>
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact", ' flex justify-between w-[90%] py-5 md:mt-[80px] px-4')