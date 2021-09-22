/*
* Created by cesarmarcial on 12/09/21
*/

// general imports

// components imports

// function imports
import Image from 'next/image'
import {useState} from "react";
import {Filtros} from "./filtrosData";
import {motion} from "framer-motion";

// Beginning of component: index
import ProductosLayout from "../../../components/layout/productosLayout/ProductosLayout";
import CartaDeFiltro from "./CartaDeFiltro";

const Index = () => {
    const [selected, setSelected] = useState(0);
    const selectedItem = Filtros[selected]
    return (
        <ProductosLayout title={'Filtros de aire, desde MERV 7 hasta Filtros HEPA'}>

            { /* Main content de las Categorias */}
            <div className={'md:col-span-7 p-4'}>
                <header className={'border-2 border-black flex justify-center'}>
                    <h2 className={'font-bold text-2xl'}>Productos dentro de esta categoría</h2>
                </header >
                <div className={'grid md:grid-cols-3 gap-6 py-6'}>
                    {
                        Filtros.map((v, i) => {
                            return (
                                <CartaDeFiltro
                                    titulo={v.title}
                                    ri={v.resistenciaInicial}
                                    rf={v.resistenciaFinal}
                                    p={v.precio}
                                    id={v.id}
                                    img={v.image}
                                    imgAlt={"Filtro plisado de aire"}
                                    click={(e) => setSelected(e.target.value)}
                                    key={i}
                                />
                            )
                        })
                    }
                </div>
            </div>

            {/* Detalle del producto*/}
            <div className={'md:col-span-3 p-4'}>
                <header className={'border-2 border-black flex justify-center'}>
                    <h2 className={'font-bold text-2xl'}>Detalle</h2>
                </header>
                <div className={'py-6'}>
                    {
                        selected !== 0 && (
                            <div className={'p-3 border-black border-2 grid gap-4'}>
                                <h3 className={'font-bold text-3xl'}>{selectedItem.title}</h3>
                                <Image src={`/${selectedItem.image}.jpg`} layout={'responsive'} height={1080} width={1920}/>
                                <span>{`Resistencia inicial: ${selectedItem.resistenciaInicial} w.g.`}</span>
                                <span>{`Resistencia final: ${selectedItem.resistenciaFinal} w.g.`}</span>
                                <span>{`Precio en dólares: $${selectedItem.precio.toFixed(2)}`}</span>
                                <motion.a
                                    className={'py-2 border-black border-2 flex justify-center rounded-md cursor-pointer'}
                                    whileHover = {{y: -5}}
                                    whileTap = {{y: 0}}
                                    href={'/fichaTecnica.pdf'}
                                    download={"fichaTecnicaDeFiltrosDeAireMERV8-RYA"}
                                >
                                    Descargar ficha técnica
                                </motion.a>

                            </div>
                        )
                    }
                </div>
            </div>

        </ProductosLayout>
    )
}

export default Index
