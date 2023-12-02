'use client'
import Image from 'next/image'
import React from 'react'
import "./myself.scss"
import { ParticleImg } from '../Particleimage'

const MySelf = () => {
    return (
        <section id="myself" className='w-full flex justify-between w-[90%] py-5 px-4'>
            <div className='flex flex-col gap-8 w-2/5 align-start  z-[9999999]  justify-start'>
                <p className='text-4xl text-white'>Aniket Suryavanshi</p>
                <p className="text-mainpara">
                    Welcome to the extraordinary world of, a versatile and imaginative artist who skillfully navigates the realms of product design, photography and digital art. With a keen eye for detail and a relentless pursuit of innovation, crafts captivating visual narratives, immersive digital realms, and functional yet aesthetically pleasing products.
                </p>
            </div>
            <div className="_container flex justify-center align-center w-2/5 relative">
                <div className=' left-[-7%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/js.png"} />
                </div>
                <div className=' top-[-27%] left-[4%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/mongo.png"} />
                </div>
                <div className=' right-[3%] top-[55%] absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/react.png"} />
                </div>
                <div className=' top-[0px] right-0 absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/nextjs.svg"} />
                </div>
                <div className=' bottom-[-31%] left-[8%]  absolute'>
                    <ParticleImg color="transparent" src={"/images/icons/ts.png"} />
                </div>
                <Image width={100} height={100} unoptimized className="profile-pic shape" src="/images/myprofile.jpg" alt="Profile Picture" />
            </div>
        </section>
    )
}

export default MySelf