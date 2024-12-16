import { AnimatePresence, motion} from "framer-motion";
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

    const isMobile = useMediaQuery({
        query: "(max-width: 640px)",
    });

    // check if the component is mounted to prevent SSR mismatches
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if(isMounted){
            const handleScroll = () => {
                setShowMenuButton(window.scrollY > 150);        //show the button after scrolling 150px
            };

            if (!isMobile){
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            } else{
                // always show the button on mobile
                setShowMenuButton(true);
            }
        }
    }, [isMobile, isMounted]);      //Dependency array is defined

    // prevent rendering until mounted
    if (!isMounted) return null;

    return (
        <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
            {/* menu */}
            <AnimatePresence>
                {showMenu && showMenuButton(<motion.div>Menu</motion.div>)}
            </AnimatePresence>
            {/* menu button */}
            {/* render button without animations no mobile */}
            {isMobile ? (
                <div className="fixed z-50 bottom-16">
                    <button className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto">
                        <CgMenuGridR className="text-4xl text-white"/>
                    </button>
                </div>
            ) : (
                <AnimatePresence>
                    {showMenuButton && (
                        <motion.div
                            initials={{y: 100, opacity: 0}}
                            animate={{ y: 0, opacity: 1}}
                            exit={{ y: 100, opacity: 0}}
                            transition={{
                                type: "spring",
                                stiffness: 400, 
                                damping: 40,
                            }}
                            className="fixed z-50 bottom-16 pointer-events-auto"
                        >
                            
                            <button className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none">
                                <CgMenuGridR className="text-4xl text-white"/>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
}

export default FixedMenu;