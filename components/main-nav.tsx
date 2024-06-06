"use client";
import { useState } from "react"
import Nav from "./nav";
import clsx from "clsx";
import { CloudCog } from "lucide-react";

type IMainNavProps = {
    className?: string    
}
const tabList = [
    {
        title: 'Home',
        url: '/home'
    },
    {
        title: 'Product',
        url: '/product'
    },
    {
        title: 'My',
        url: '/my'
    }
]

const Tabs = (props: IMainNavProps) =>  {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    }
    return (
            <ul className={clsx(props.className, 'flex flex-1 justify-around')}>
            {
                tabList.map((item, index) => (
                        <li
                            key={item.url}
                            onClick={()=> handleTabClick(index)}
                        >
                            <Nav
                                title={item.title}
                                url={item.url}
                                active={activeIndex === index}
                                className="border-b-2 border-transparent"
                                activeClassName="border-blue-500"
                            />   
                        </li> 
                ))
            }
            </ul>
        )
}

export default Tabs