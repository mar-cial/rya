import Head from 'next/head';
import NavigationContainer from '../../components/sections/navigation/navigationContainer';
import Header from "../../components/sections/header/header";
import {useState} from 'react';

const Productos = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={'p-4'}>
            <Head>
                <title>Rya Soluciones Ambientales</title>
            </Head>

            <NavigationContainer status={openMenu}/>

            <Header openMenu={openMenu} action={() => setOpenMenu(!openMenu)}/>

            <main>
                <h1 className={'text-4xl font-bold'}>Productos</h1>
            </main>
        </div>
    );
};

export default Productos;
