import { AnimationPresence, motion} from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

// components 
import Nav from "./Nav";
import Socials from "./Socials";

const FixedMenu = () => {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);  //ensure that the component is Mounted

    return (
        <div>Fixed menu</div>
    )
}

export default FixedMenu;