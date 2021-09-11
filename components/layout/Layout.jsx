/*
* Created by cesarmarcial on 10/09/21
*/

// general imports

// components imports
import NavigationContainer from "./navigation/navigationContainer";
import Header from "./header/header";

// function imports
import Head from 'next/head'
import {useState} from "react";


// Beginning of component: Layout
const Layout = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggle = () => {
        console.log(`Current state: ${openMenu}`)
        setOpenMenu(!openMenu)
        console.log(`State después de ser cambiado: ${openMenu}`)
    }

    return (
        <div className={'p-4'}>
            <Head>
                <title>Rya Soluciones Ambientales</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <NavigationContainer status={openMenu} action={() => setOpenMenu(false)}/>

            <Header status={openMenu} action={() => toggle()}/>
            {children}
        </div>
    )
}

export default Layout
