import { routes } from './routes'
import {navContainerAnimation, navContainerItemAnimation} from "./navigationAnimations";
import {motion} from "framer-motion";
import Link from 'next/link'
import {useState} from "react";
import Image from "next/image";
import {white} from "tailwindcss/colors";

const NavigationContainer = ({ }) => {
    const [status, setStatus] = useState(false)


    
    return (
        <>
            <motion.nav variants={navContainerAnimation} initial='hidden' animate={status ? 'visible' : 'hidden'}  className={'w-1/3'}>
                <motion.ul className={'font-bold flex flex-col'}>
                    {routes.map((v, i) => {
                        return (
                            <motion.li variants={navContainerItemAnimation}
                                       whileHover={{x: 5}}
                                       whileTap={{x: 0}}
                                       key={i}
                                       onClick={() => setStatus(!status)}
                            >

                                <Link href={v.url}>
                                    <a>{v.text}</a>
                                </Link>

                            </motion.li>
                        )
                    })}
                </motion.ul>
            </motion.nav>
            <header className={'grid grid-cols-2'}>
                <div className={'flex items-center '}>
                    <Image width={90} height={90} src={"/logo.svg"} />
                    <Link href={"/"} >
                        <a className={'font-bold md:text-2xl cursor-pointer'}>Rya Soluciones Ambientales
                        </a>
                    </Link>
                </div>

                <div className={'flex justify-end items-center'}>
                    <motion.button

                        onClick={() => setStatus(!status)}
                        className={'font-bold md:text-xl px-2 py-1 bg-black text-white rounded-md border-black border-2'}
                        whileHover={{y: -5, backgroundColor: 'white', color: 'black', border: 'solid 2px black'}}
                        whileTap={{y: 0,}}

                    >
                        {status ? "Cerrar menú" : "Abrir menú"}

                    </motion.button>
                </div>
            </header>
        </>
    )
}

export default NavigationContainer;