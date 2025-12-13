"use client"

import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/FelypeDantas"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/felype-dantas-dos-santos-94497b193"},
    {icon: <FaYoutube />, path: "https://www.youtube.com/channel/UCnJ4rJGj0wxeDm2aGSYsxQA"},
    {icon: <FaInstagram />, path: "https://instagram.com/felype_dantas_santos"}
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
            })}
        </div>
    )
}

export default Social;