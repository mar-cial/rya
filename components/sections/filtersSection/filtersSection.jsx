const FilterSection = () => {
    return (
        <section className={'grid md:grid-cols-3 md:gap-6 py-8'}>
            <header>
                <h2 className={'font-bold text-2xl'}>Filtros de aire</h2>
                <p>
                    Evite la pérdida de frío o de calor, sin fricción al pasar. Las cortinas de aire evitan la transferencia de temperaturas así como repelen contaminantes e insectos.
                </p>
            </header>
            <div>
                <header>
                    <h2 className={'font-bold text-xl'}>
                        Características de nuestros filtros de aire:
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
                <div className={'flex items-center justify-center border-2 border-black h-40'}>
                    <p>Aquí habrá una foto</p>
                </div>
            </aside>
        </section>
    )
}

export default FilterSection;