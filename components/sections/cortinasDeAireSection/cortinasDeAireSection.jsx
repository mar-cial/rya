import Link from 'next/link'
import AsideSectionPhoto from "../AsideSectionPhoto";

const CortinasDeAireSection = () => {
    return (
        <section className={'grid md:grid-cols-3 md:gap-6 py-8'}>
            <header>
                <h2 className={'font-bold text-2xl'}>Cortinas de aire</h2>
                <p>
                    Evite la pérdida de frío o de calor, sin fricción al pasar. Las cortinas de aire evitan la transferencia de temperaturas así como repelen contaminantes e insectos.
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
                imgAlt={'Cortinas de aire'}
                imageTitle={'Cortinas de aire'}
                imageLink={"/productos"}
                imageSrc={'/cortinasDeAire.jpg'}

            />
        </section>
    )
}

export default CortinasDeAireSection