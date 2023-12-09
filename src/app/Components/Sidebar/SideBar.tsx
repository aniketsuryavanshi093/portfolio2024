'use client'
import React, { useCallback, useEffect, useState } from 'react'
import "./sidebar.scss"
import { Tooltip } from "@nextui-org/react";
import Link from 'next/link';


type sidebaroptions = {
    toltipcontent: string,
    icon: string,
    redirecthref: string,
}

const SideBar = () => {
    const [SelectedIcon, setSelectedIcon] = useState("myself")
    const [Scrolled, setScrolled] = useState(false)
    const sidebarobject: sidebaroptions[] = [
        {
            toltipcontent: "myself",
            icon: "fa-solid fa-house",
            redirecthref: "#myself",
        }
        , {
            toltipcontent: "About Me",
            icon: "fa-solid fa-user",
            redirecthref: "#about",
        }
        , {
            toltipcontent: "What i Offer",
            icon: "fa-solid fa-book-open-reader",
            redirecthref: "",
        }, {
            toltipcontent: "My Projects",
            icon: "fa-solid fa-diagram-project",
            redirecthref: "/projects",
        }, {
            toltipcontent: "Contact me",
            icon: "fa-solid fa-address-book",
            redirecthref: "#contact",
        }
    ]
    const handleScroll = useCallback((e: any,) => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }, [])
    useEffect(() => {
        return () => window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className='fixed py-1 z-[999999] flex flex-row lg:flex-col  justify-center align-center gap-2 w-auto lg:w-16 h-auto lg:top-12 top-[1%] left-[12%]   lg:left-11 sidebar'>
            {
                sidebarobject?.map((elem: sidebaroptions) => (
                    <Tooltip key={elem.icon} content={elem.toltipcontent} placement="right">
                        <Link href={elem.redirecthref}>
                            <div onClick={() => setSelectedIcon(elem.toltipcontent)} className={`${SelectedIcon === elem.toltipcontent && "selectedicon"} cursor-pointer sidebaricons h-12 w-12  flex flex-col justify-center align-center`}>
                                <i className={`${elem.icon} `}></i>
                                {SelectedIcon === elem.toltipcontent && (
                                    <div className='mb-0  selecteddot mt-1'></div>
                                )}
                            </div>
                        </Link>
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default SideBar