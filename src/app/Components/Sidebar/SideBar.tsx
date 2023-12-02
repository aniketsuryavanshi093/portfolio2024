'use client'
import React, { useState } from 'react'
import "./sidebar.scss"
import { Tooltip } from "@nextui-org/react";


type sidebaroptions = {
    toltipcontent: string,
    icon: string,
    redirecthref: string,
}

const SideBar = () => {
    const [SelectedIcon, setSelectedIcon] = useState("myself")
    const sidebarobject: sidebaroptions[] = [
        {
            toltipcontent: "myself",
            icon: "fa-solid fa-house",
            redirecthref: "",
        }
        , {
            toltipcontent: "About Me",
            icon: "fa-solid fa-user",
            redirecthref: "",
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
            redirecthref: "",
        }
    ]
    return (
        <div className='absolute py-1 z-50 flex flex-col justify-center align-center gap-2 w-16 h-auto top-12 left-11 sidebar'>
            {
                sidebarobject?.map((elem: sidebaroptions) => (
                    <Tooltip key={elem.icon} content={elem.toltipcontent} placement="right">
                        <div onClick={() => setSelectedIcon(elem.toltipcontent)} className={`${SelectedIcon === elem.toltipcontent && "selectedicon"} cursor-pointer sidebaricons h-12 w-12   flex flex-col justify-center align-center`}>
                            <i className={`${elem.icon} `}></i>
                            {SelectedIcon === elem.toltipcontent && (
                                <div className='mb-0  selecteddot mt-1'></div>
                            )}
                        </div>
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default SideBar