/*
* Created by cesarmarcial on 13/09/21
*/

// general imports

// components imports

// function imports

// Beginning of component: CartaDeFiltro
import Image from "next/image";

const CartaDeFiltro = ({titulo, id, click, img, imgAlt}) => {

    return (
        <div className={'grid gap-6 border-black border-2 rounded-md p-4'}>
            <h2 className={'font-bold text-lg'}>{titulo}</h2>
            <Image src={`/${img}.jpg`} alt={imgAlt} layout={'responsive'} width={1920} height={1080} className={'rounded-md'}/>
            <button
                value={id - 1}
                onClick={click}
                className={'font-bold text-white bg-black rounded-md'}
            >
                Saber más
            </button>
        </div>
    )
}

export default CartaDeFiltro
