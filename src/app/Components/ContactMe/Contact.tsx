'use client'
import { contacts } from '@/app/constants'
import SectionWrapper from '@/app/hoc/StaggerContainer'
import React from 'react'
import { motion } from 'framer-motion'
import "./contact.scss"
import { Input, Textarea } from '@nextui-org/react'
import { Tilt } from 'react-tilt'
import axios from 'axios'
import Image from 'next/image'
import { ParticleImg } from '../Particleimage'

const Contact = () => {
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = {
            Name: event.target.name.value,
            Email: event.target.email.value,
            Message: event.target.message.value,
            Date: new Date().toString()
        };
        try {
            const response = await axios.post("/api/contact", data);
            if (response.status === 200) {
                console.log("Form submitted");
            } else {
                console.log("Failed");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='w-full'>
            <div className='flex justify-center mb-14'>
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
                <div className='flex-[2] w-full flex-col flex justify-center align-end'>
                    <div className=' w-[60%] flex justify-center align-center profile-container'>
                        <div className="ring ring2">
                            <ParticleImg particles={5000} scale={1} className='rounded-[50%]' mass={50} width={300} height={300} color="transparent" src={"/images/bluebg.png"} />
                        </div>
                        <div className="ring ring3">
                            <ParticleImg particles={5000} scale={1.5} className='rounded-[50%]' mass={20} width={400} height={400} color="transparent" src={"/images/white.png"} />
                        </div>
                        <Image className="profile-image" width={150} height={150} src="/images/myprofile.jpg" alt="Profile Picture" />
                    </div>
                    <div className='w-[60%]  p-5 contactbg z-10'>
                        <div className='flex justify-center'>
                            <p className='w-full text-center text-2xl  text-orange-400'>Contact Me</p>
                            <i className="fa-solid fa-star text-2xl text-orange-400"></i>
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <Input type="text" name='name' variant={'underlined'} label="Name"
                                isRequired
                                autoComplete="off" />
                            <Input type="email" name='email' variant={'underlined'} label="Email"
                                required isRequired
                                autoComplete="off"
                            />
                            <Textarea rows={4}
                                autoComplete="off" isRequired type="text" name='message' variant={'underlined'} label="Message"
                            />
                            <button type="submit" className='w-full contactbtn'>
                                Get In Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact", ' flex justify-between w-[90%] py-5 md:mt-[80px] px-4')