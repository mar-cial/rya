import AsideSectionPhoto from "../AsideSectionPhoto";

const DockLevelerSection = () => {
    return (
        <section className={'grid md:grid-cols-3 md:gap-6 py-8'}>
            <header>
                <h2 className={'font-bold text-2xl'}>Dock Levelers</h2>
                <p>
                    Dock levelers que aguantan desde 10,000 hasta 40,000 libras. Lo mejor en la industria para cargar y descargar material de manera segura y eficiente.
                </p>
            </header>
            <div className={'py-6 md:py-0'}>
                <header>
                    <h2 className={'font-bold text-xl'}>
                        Características de nuestros Dock Levelers:
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
                imageSrc={'/dockLevelers.png'}
                imageLink={'/productos'}
                imageTitle={'Dock levelers'}
                imgAlt={'Dock levelers'}
            />
        </section>
    )
}

export default DockLevelerSection;