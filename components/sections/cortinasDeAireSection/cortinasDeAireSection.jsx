import Link from 'next/link'

const CortinasDeAireSection = () => {
    return (
        <section className={'grid md:grid-cols-3 md:gap-6 py-8'}>
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
            <aside className={'border-2 border-black grid'}>
                <h3 className={'font-bold text-xl'}>
                    Foto de cortina de plástico
                </h3>
                <div className={'flex items-center justify-center border-2 border-black h-40'}>
                    <p>Aquí habrá una foto</p>
                </div>
                <Link href={'/'}><a className={'flex justify-center bg-black text-white font-bold rounded-sm'}>Saber más</a></Link>
            </aside>
        </section>
    )
}

export default CortinasDeAireSection