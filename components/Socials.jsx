import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
    {
        icon: <FaLinkedin />,
        path: "",
    },
    {
        icon: <FaGithub />,
        path: "",
    },
];

const Socials = ({ containerStyles, iconStyles }) =>
{
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        <span>
                            {item.icon}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;

