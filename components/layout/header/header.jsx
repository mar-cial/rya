import Link from 'next/link'
import Image from 'next/image'
const Header = ({status, action}) => {
    return (
        <header className={'grid grid-cols-2'}>

            <div className={'flex items-center '}>
                <Image width={90} height={90} src={"/logo.svg"} />
                <Link href={"/"} ><a className={'font-bold md:text-2xl cursor-pointer'}>Rya Soluciones Ambientales</a></Link>
            </div>

            <div className={'flex justify-end items-center'}>
                <button onClick={action} className={'font-bold md:text-xl px-2 py-1 bg-black text-white rounded-md'}>{status ? "Cerrar menú" : "Abrir menú"}</button>
            </div>
        </header>
    )
}

export default Header;