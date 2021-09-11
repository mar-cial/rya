import Head from 'next/head';
import { useState } from 'react';
import NavigationContainer from '../../components/sections/navigation/navigationContainer';
import Header from "../../components/sections/header/header";

const Nosotros = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={'p-4'}>
      <Head>
        <title>Rya Soluciones Ambientales</title>
      </Head>

      <NavigationContainer status={openMenu} />

        <Header openMenu={openMenu} action={() => setOpenMenu(!openMenu)} />
    </div>
  );
};

export default Nosotros;
