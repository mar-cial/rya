import AsideSectionPhoto from "../AsideSectionPhoto";

const CortinasRapidasSection = () => {
    return (
        <section className={'grid md:grid-cols-3 md:gap-6 py-8'}>
            <header>
                <h2 className={'font-bold text-2xl'}>Cortinas Rápidas</h2>
                <p>
                    Las cortinas rápidas son el más alto nivel en productos para separar áreas. El acceso rápido y automático permite una productividad incomparable en el ambiente laboral.
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
                imageSrc={'/highSpeedDoor.jpg'}
                imageLink={'/productos'}
                imageTitle={'Cortinas rápidas'}
                imgAlt={'Cortinas rápidas'}
            />
        </section>
    )
}

export default CortinasRapidasSection;