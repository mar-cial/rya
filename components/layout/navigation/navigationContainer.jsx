import { routes } from './routes'
import {navContainerAnimation, navContainerItemAnimation} from "./navigationAnimations";
import {motion} from "framer-motion";
import Link from 'next/link'

const NavigationContainer = ({status, action}) => {
    return (
        <motion.nav variants={navContainerAnimation} initial='hidden' animate={status ? 'visible' : 'hidden'}  className={'w-1/3'}>
            <motion.ul className={'font-bold flex flex-col'}>
                    {routes.map((v, i) => {
                        return (
                            <motion.li variants={navContainerItemAnimation}
                                       whileHover={{x: 5}}
                                       whileTap={{x: 0}}
                                       key={i}
                                       onClick={action}
                                       >

                                    <Link href={v.url} passHref>
                                        <a>{v.text}</a>
                                    </Link>

                            </motion.li>
                        )
                    })}
            </motion.ul>
        </motion.nav>
    )
}

export default NavigationContainer;