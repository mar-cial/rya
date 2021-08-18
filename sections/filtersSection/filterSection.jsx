import { industrias } from '../../data/industrias';
const FilterSection = () => {
  return (
    <section className={'grid md:grid-cols-3 md:gap-6'}>
      <header>
        <h2 className={'font-bold text-2xl'}>Filtros de aire</h2>
        <p>
          Contamos con una gran variedad en filtros especializados para todo
          tipo de industria.
        </p>
      </header>
      <div>
        <header>
          <h2 className={'font-bold text-xl'}>
            Ofrecemos los siguientes filtros:
          </h2>
        </header>
        <ul>
          <li>Eficiencias desde Merv 7 hasta HEPA</li>
          <li>Filtros Pleat</li>
          <li>Filtros Poliéster</li>
          <li>Filtros de carbón activado</li>
          <li>Filtros HEPA</li>
        </ul>
      </div>
      <aside>
        <h3 className={'font-bold text-xl'}>
          Utilizados en las siguientes industrias:
        </h3>
        <div>
          <ul className={'grid gap-2'}>
            {industrias.map((v, i) => (
              <li key={i}>{v.industria}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default FilterSection;
