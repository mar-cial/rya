/*
* Created by cesarmarcial on 10/09/21
*/

// general imports

// components imports
import NavigationContainer from "./navigation/navigationContainer";

// function imports
import Head from 'next/head'

// Beginning of component: Layout
const Layout = ({children}) => {


    return (
        <div className={'p-4'}>
            <Head>
                <title>Rya Soluciones Ambientales</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <NavigationContainer />


            {children}
        </div>
    )
}

export default Layout
