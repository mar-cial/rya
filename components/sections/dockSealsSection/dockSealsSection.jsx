import AsideSectionPhoto from "../AsideSectionPhoto";

const DockSealsSection = () => {
    return (
        <section className={'grid md:grid-cols-3 md:gap-6 py-8'}>
            <header>
                <h2 className={'font-bold text-2xl'}>Dock seals</h2>
                <p>
                    Los dock seals crean un sello al momento de recibir material que no deja salir o entrar el aire del ambiente, insectos ni contaminantes.
                </p>
            </header>
            <div className={'py-6 md:py-0'}>
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
            <AsideSectionPhoto
                imgAlt={'Dock seals / sellos de andén'}
                imageTitle={'Dock seals / sellos de andén'}
                imageLink={'/productos'}
                imageSrc={'/dockSeals.jpg'}
            />
        </section>
    )
}

export default DockSealsSection;