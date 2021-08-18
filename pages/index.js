import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../sections/navigation/navigation'
import { useState } from 'react'
import FilterSection from '../sections/filtersSection/filterSection'
import CortinasSection from '../sections/cortinasSection/cortinasSection'

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

      {openMenu ? <Navigation /> : ''}

      <header className={'grid grid-cols-2'}>
        <span className={'font-bold text-xl'}>Logo</span>
        <button className={`${openMenu ? 'bg-black text-white' : 'bg-white border-2 border-black font-black '} rounded-md font-bold text-md place-self-end px-4 py-1`} onClick={() => toggle()}>{openMenu ? "Cerrar menú" : "Abrir menú"}</button>
      </header>

      <main>
        <div className={'w-1/2'}>
          <h1 className={'text-4xl font-bold'}>Expertos en la filtración de agentes contaminantes en su área laboral</h1>
          <p>En Rya contamos con la solución a todas sus necesidades de fitlración. También contamos con todas las soluciones para sus necesidades de mantener un ambiente limpio y controlado.</p>
          <button className={'bg-black rounded-md text-white py-1 px-4 font-bold'}>Contáctenos</button>
        </div>
      </main>

      <FilterSection />

      <CortinasSection />

      <section className={'grid md:grid-cols-3 md:gap-6'}>
        <header>
          <h2 className={'font-bold text-2xl'}>Cortinas de aire</h2>
          <p>
            Evite la pérdida de frío o de calor, sin fricción al pasar. Las cortinas de aire evitan la transferencia de temperaturas así como repelen contaminantes e insectos.
          </p>
        </header>
        <div>
          <header>
            <h2 className={'font-bold text-xl'}>
              Características de nuestras cortinas:
            </h2>
          </header>
          <ul>
            <li>Característica 1</li>
            <li>Característica 2</li>
            <li>Característica 3</li>
            <li>Característica 4</li>
          </ul>
        </div>
        <aside className={'border-2 border-black'}>
          <h3 className={'font-bold text-xl'}>
            Foto de cortina de plástico
          </h3>
          <div className={'flex items-center justify-center border-2 border-black h-full'}>
            <p>Aquí habrá una foto</p>
          </div>
        </aside>
      </section>



    </div >
  )
}

export default Landing
