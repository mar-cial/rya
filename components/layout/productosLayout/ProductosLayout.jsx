/*
* Created by cesarmarcial on 12/09/21
*/

// general imports

// components imports

// function imports
import Link from 'next/link'
import PageTitle from "../../general/PageTitle";
import { filtros} from "../../../pages/productos/filtros/filtrosData";

// Beginning of component: ProductosLayout

const ProductosLayout = ({title, children, selectedItem, selectedCategory}) => {
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
            <div className={'grid md:grid-cols-12 gap-2 h-32'}>

                <div className={'md:col-span-3 bg-red-100 grid gap-6 border-2 border-black p-4'}>
                    <header className={'border-2 border-black flex justify-center'}>
                        <h2 className={'font-bold text-2xl'}>Categorias</h2>
                    </header>

                    {/* Listado de categorias */}
                    <div className={'border-2 border-black'}>
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

                { /* Main content de las categorias */}
                <div className={'md:col-span-7 bg-blue-100 p-4 border-2 border-black'}>
                    <header className={'border-2 border-black flex justify-center'}>
                        <h2 className={'font-bold text-2xl'}>Productos dentro de esta categoría</h2>
                    </header >
                    <div className={'grid'}>
                        {children}
                    </div>
                </div>

                {/* Detalle del producto*/}
                <div className={'md:col-span-2 bg-blue-100 p-4'}>
                    <header className={'border-2 border-black flex justify-center'}>
                        <h2 className={'font-bold text-2xl'}>Detalle</h2>
                        <li>
                            {
                                console.log(filtros.find((v) => v === selectedItem))
                            }
                        </li>
                    </header>
                </div>

            </div>
        </>
    )
}

export default ProductosLayout
