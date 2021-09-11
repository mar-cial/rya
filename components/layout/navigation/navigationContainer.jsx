import { routes } from './routes'
import {navContainerAnimation, navContainerItemAnimation} from "./navigationAnimations";
import {motion} from "framer-motion";
import Link from 'next/link'

const NavigationContainer = ({status}) => {
    return (
        <motion.nav variants={navContainerAnimation} initial='hidden' animate={status ? 'visible' : 'hidden'}  className={'w-1/3'}>
            <ul>
                <motion.li className={'font-bold flex flex-col'}>
                    {routes.map((v, i) => {
                        return (
                            <motion.a
                                variants={navContainerItemAnimation}
                                whileHover={{x: 5}}
                                whileTap={{x: 0}}
                                key={i}
                            >
                                <Link href={v.url}>{v.text}</Link>
                            </motion.a>
                        )
                    })}
                </motion.li>
            </ul>
        </motion.nav>
    )
}

export default NavigationContainer;