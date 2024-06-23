import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaDiscord, FaTwitter} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/EmmanuellDev"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/emmanuel-ramamoorthy-987429257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    { icon: <FaDiscord />, path: "https://discordapp.com/users/emmanuelrsk"},
    { icon: <FaTwitter />, path: "https://x.com/EmmanuelRsk04?t=V2l-e34l2LWOfOJWD1SSpA&s=09"},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Social;