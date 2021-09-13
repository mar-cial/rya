/*
* Created by cesarmarcial on 12/09/21
*/

// general imports

// components imports

// function imports
import {useState} from "react";
import {filtros} from "./filtrosData";

// Beginning of component: index
import ProductosLayout from "../../../components/layout/productosLayout/ProductosLayout";

const Index = () => {
    const [selectedItem, setSelectedItem] = useState(1);


    const handleClick = (el) => {
        setSelectedItem(el.target.value)
    }
    
    return (
        <ProductosLayout title={'Filtros de aire, desde MERV 7 hasta filtros HEPA'} selectedItem={selectedItem}>
            {
                filtros.map((v, i) =>
                    <div>
                        <li>{v.title}</li>
                        <button value={v.id} onClick={handleClick}>Click</button>
                    </div>)
            }
        </ProductosLayout>
    )
}

export default Index
