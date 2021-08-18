const CortinasSection = () => {
  return (
    <section className={'grid md:grid-cols-3 md:gap-6'}>
      <header>
        <h2 className={'font-bold text-2xl'}>Cortinas de plástico</h2>
        <p>
          Vendemos desde 1 pie hasta rollos completos de tiras de plástico PVC,
          ideales para seccionar áreas e impedir la transferencia tanto de frío
          como calor.
        </p>
      </header>
      <div>
        <header>
          <h2 className={'font-bold text-xl'}>
            Ofrecemos los siguientes filtros:
          </h2>
        </header>
        <ul>
          <li>8" Liso Std Transparente</li>
          <li>8" Lock Rib</li>
          <li>12" Liso Std</li>
          <li>12" Lock Rib</li>
          <li>48" Liso Std</li>
        </ul>
      </div>
      <aside>
        <h3 className={'font-bold text-xl'}>
          La importancia de las cortinas de plástico
        </h3>
        <div>
          <p>
            Las cortinas de plástico ayudan a mantener la temperatura de dos
            áreas separadas. Esta separación resulta en un ahorro de energía,
            evitar fugas en la cadena de frío, y en general un ahorro para su
            empresa.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default CortinasSection;
