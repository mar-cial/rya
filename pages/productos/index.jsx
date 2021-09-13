import PageTitle from "../../components/general/PageTitle";
import MainPageContainer from "../../components/sections/MainPageContainer";

import ProductosLayout from "../../components/layout/productosLayout/ProductosLayout";

const Productos = () => {
    return (
       <MainPageContainer>
           <ProductosLayout title={'Conoce nuestros productos'}>
               <div className={'md:col-span-7 bg-blue-100 p-4'}>
                   <header className={'border-2 border-black flex justify-center'}>
                       <h2 className={'font-bold text-2xl'}>Productos dentro de esta categoría</h2>
                   </header >
                   <div className={'grid'}>

                   </div>
               </div>

               {/* Detalle del producto*/}
               <div className={'md:col-span-3 bg-blue-100 p-4'}>
                   <header className={'border-2 border-black flex justify-center'}>
                       <h2 className={'font-bold text-2xl'}>Detalle</h2>
                       <div>

                       </div>
                   </header>
               </div>
           </ProductosLayout>

       </MainPageContainer>
    );
};

export default Productos;
