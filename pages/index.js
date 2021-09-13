import FilterSection from "../components/sections/filtersSection/filtersSection";
import CortinasDeAireSection from "../components/sections/cortinasDeAireSection/cortinasDeAireSection";
import CortinasRapidasSection from "../components/sections/cortinasRapidasSection/cortinasRapidasSection";
import DockSealsSection from "../components/sections/dockSealsSection/dockSealsSection";
import DockLevelerSection from "../components/sections/dockLevelersSection/dockLevelerSection";
import MainPageContainer from "../components/sections/MainPageContainer";
import PageTitle from "../components/general/PageTitle";
import CortinasPVCSection from "../components/sections/cortinasSection/CortinasPVCSection";


import Link from 'next/link'
const Landing = () => {
  return (
    <>

      <MainPageContainer>
        <div className={'md:w-1/2 grid gap-6'}>
          <PageTitle className={'text-4xl font-bold'}>Expertos en la filtración de agentes contaminantes en su área laboral</PageTitle>
          <p>En Rya contamos con la solución a todas sus necesidades de fitlración. También contamos con todas las soluciones para sus necesidades de mantener un ambiente limpio y controlado.</p>
          <Link href={'/contacto'}>
            <a className={'bg-black rounded-md text-white md:py-1 py-3 font-bold md:w-2/3 flex justify-center'}>
              Contáctenos
            </a>
          </Link>
          <Link href={'/productos'}>
            <a className={'bg-black rounded-md text-white md:py-1 py-3 font-bold md:w-2/3 flex justify-center'}>
              Productos
            </a>
          </Link>
        </div>
      </MainPageContainer>

        <FilterSection />
        <CortinasPVCSection />
        <CortinasDeAireSection />
        <CortinasRapidasSection />
        <DockSealsSection />
        <DockLevelerSection />
    </>
  )
}

export default Landing
