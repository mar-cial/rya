/*
* Created by cesarmarcial on 12/09/21
*/

// general imports

// components imports

// function imports
import Link from 'next/link'
import PageTitle from "../../general/PageTitle";
import { Filtros } from "../../../pages/productos/filtros/filtrosData";

// Beginning of component: ProductosLayout
const ProductosLayout = ({title, children}) => {
    const categoryRoutes = [
        {
            url: "/productos/filtros",
            texto: "Filtros de aire"
        },
        {
            url: "/productos/cortinasDePlastico",
            texto: "Cortinas de plástico"
        },
        {
            url: "/productos/cortinasDeAire",
            texto: "Cortinas de aire"
        },
        {
            url: "/productos/cortinasRapidas",
            texto: "Cortinas rápidas"
        },
        {
            url: "/productos/sellosDeAnden",
            texto: "Sellos de andén"
        },
        {
            url: "/productos/dockLevelers",
            texto: "Dock Levelers"
        }
    ]

    return (
        <>
            <PageTitle>{title}</PageTitle>
            <div className={'grid md:grid-cols-12 gap-2'}>
                <div className={'md:col-span-2  gap-6 p-4'}>
                    <header className={'border-2 border-black flex justify-center'}>
                        <h2 className={'font-bold text-2xl'}>Categorias</h2>
                    </header>

                    {/* Listado de Categorias */}
                    <div className={'border-2 border-black flex flex-col mt-4'}>
                        <ul className={'grid gap-4 p-4'}>
                            {
                                categoryRoutes.map((v, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href={v.url}>
                                                <a>{v.texto}</a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {children}
            </div>
        </>
    )
}

export default ProductosLayout
