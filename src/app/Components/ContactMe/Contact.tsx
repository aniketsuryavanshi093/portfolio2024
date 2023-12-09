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
import { useIsBreakpointActive } from '@/app/hooks/useTailwindBreakpoint'

const Contact = () => {
    const isLarge = useIsBreakpointActive()
    console.log(isLarge,);

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
    const getWidthHeight = (ring?: string) => {
        if (ring) {
            switch (isLarge) {
                case 'xl':
                    return ring === "ring3" ? 400 : 300;
                case '2xl':
                    return ring === "ring3" ? 400 : 300;
                case 'lg':
                    return ring === "ring3" ? 280 : 200;
                default:
                    return ring === "ring3" ? 250 : 190;
            }
        } else {
            switch (isLarge) {
                case 'xl':
                    return 150;
                case '2xl':
                    return 150;
                case 'lg':
                    return 120;
                default:
                    return 100;
            }
        }
    }
    return (
        <div className='w-full'>
            <div className='flex justify-center mb-14'>
                <motion.p className='text-2xl '> Get in touch </motion.p>
            </div>
            <div className='md:flex md:flex-row flex flex-col  justify-center'>
                <div className='flex-1'>
                    <div className='w-full flex gap-6 flex-col  items-center  lg:items-end '>
                        {
                            contacts.map((elem) => (
                                <Tilt key={elem.icon} className=" w-[200px] border  py-6 px-4 lg:w-[75%] margin-auto flex flex-col justify-center align-center rounded-lg">
                                    <i className={`${elem.icon} text-lg`} />
                                    <p className=' text-sm xl:text-xl pt-5 pb-1'>{elem.label}</p>
                                    <p className='text-mainpara  text-[12px] lg:text-[13px] 2xl:text-[16px] '>{elem.content}</p>
                                </Tilt>
                            ))
                        }
                    </div>
                </div>
                <div className='flex-[2] w-full sm:mt-0  mt-24 flex-col flex justify-center  items-center  lg:items-end'>
                    <div className=' xl:w-[60%] lg:w-[50%] w-full flex justify-center align-center profile-container'>
                        <div className="ring ring2 xl:w-[300px] xl:h-[300px] lg:w-[200px] lg:h-[200px] w-[190px] h-[190px] ">
                            <ParticleImg particles={5000} scale={1} className='rounded-[50%]' mass={50} width={getWidthHeight('ring2')} height={getWidthHeight('ring2')} color="transparent" src={"/images/bluebg.png"} />
                        </div>
                        <div className="ring xl:w-[400px] xl:h-[400px] lg:w-[280px] lg:h-[280px] w-[250px] h-[250px] ">
                            <ParticleImg particles={5000} scale={1.5} className='rounded-[50%]' mass={20} width={getWidthHeight('ring3')} height={getWidthHeight('ring3')} color="transparent" src={"/images/white.png"} />
                        </div>
                        <Image className="profile-image" width={getWidthHeight()} height={getWidthHeight()} src="/images/myprofile.jpg" alt="Profile Picture" />
                    </div>
                    <div className='xl:w-[60%] lg:w-[50%] w-4/5   xl:p-5 p-3 contactbg z-10'>
                        <div className='flex justify-center items-center'>
                            <p className='w-full text-center  xl:text-2xl text-lg  text-orange-400'>Contact Me</p>
                            <i className="fa-solid fa-star xl:text-2xl text-lg text-orange-400"></i>
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
                            <button type="submit" className='w-full xl:h-[50px] xl:text-base text-sm h-8 contactbtn'>
                                Get In Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact", ' flex justify-between lg:w-[90%] w-full py-5 md:mt-[80px] px-4')