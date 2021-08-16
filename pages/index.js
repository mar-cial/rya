import Head from 'next/head'
import Logo from '../components/logo'
import Link from 'next/link'
import Hamburger from '../components/hamburger'
import areas from '../components/home/area.json'
import Area from '../components/home/area'

const Home = () => {
  return (
    <div className={'p-4'}>
      <Head>
        <title>Rya Soluciones Ambientales</title>
        <link rel="icon" href="/logo.ico" />
      </Head>


      <header className={'grid grid-cols-2'}>
        <div className={'flex items-center'}>
          <Link href="/"><Logo className={'h-14 w-14 cursor-pointer'} /></Link>
          <Link href="/"><a className={'font-bold text-xl'}>Inicio</a></Link>
        </div>
        <div className={'flex items-center justify-end'}>
          <Hamburger className={'h-16 w-16'} />
        </div>
      </header>
      <main className={'pt-6'}>
        <h1 className={'text-2xl font-bold pb-2'}>Expertos en la eliminación de contaminantes en el aire.</h1>
        <p>Vendemos filtros de aire plisados, de poliéster, y muchos diferentes productos ambientados a mantener un ambiente controlado en su espacio laboral.</p>
      </main>
      <section className={'pt-6'}>
        <header><h2 className={'text-xl font-bold'}>Nuestras áreas de especialidad son:</h2></header>
        <div className={'grid grid-cols-2 grid-rows-3 gap-2 pt-6'}>
          {areas.map((v, i) => <Area key={i} title={v.title} />)}

        </div>
      </section>
    </div>
  )
}

export default Home
