import Head from 'next/head'

import Header from "../components/sections/header/header";
import { useState } from 'react'
import NavigationContainer from "../components/sections/navigation/navigationContainer";
import FilterSection from "../components/sections/filtersSection/filtersSection";
import CortinasDeAireSection from "../components/sections/cortinasDeAireSection/cortinasDeAireSection";
import CortinasRapidasSection from "../components/sections/cortinasRapidasSection/cortinasRapidasSection";
import DockSealsSection from "../components/sections/dockSealsSection/dockSealsSection";
import DockLevelerSection from "../components/sections/dockLevelersSection/dockLevelerSection";

const Landing = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggle = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className={'p-4'}>
      <Head>
        <title>Rya Soluciones Ambientales</title>
      </Head>

      <NavigationContainer status={openMenu}/>

      <Header status={openMenu} action={() => toggle()}/>

      <main className={'py-6'}>
        <div className={'md:w-1/2 grid gap-6 pt-8'}>
          <h1 className={'text-4xl font-bold'}>Expertos en la filtración de agentes contaminantes en su área laboral</h1>
          <p>En Rya contamos con la solución a todas sus necesidades de fitlración. También contamos con todas las soluciones para sus necesidades de mantener un ambiente limpio y controlado.</p>
          <button className={'bg-black rounded-md text-white py-1 px-4 font-bold w-2/3'}>Contáctenos</button>
          <button className={'bg-black rounded-md text-white py-1 px-4 font-bold w-2/3'}>Productos</button>
        </div>
      </main>


        <FilterSection />
        <CortinasDeAireSection />
        <CortinasRapidasSection />
        <DockSealsSection />
        <DockLevelerSection />
    </div >
  )
}

export default Landing
