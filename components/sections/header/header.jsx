import Link from 'next/link'

const Header = ({status, action}) => {
    return (
        <header className={'flex justify-between items-center'}>
            <Link href={"/"}><a className={'font-bold text-xl'}>Logo</a></Link>
            <button onClick={action} className={'font-bold text-xl px-2 py-2 bg-black text-white rounded-md'}>{status ? "Cerrar menú" : "Abrir menú"}</button>
        </header>
    )
}

export default Header;