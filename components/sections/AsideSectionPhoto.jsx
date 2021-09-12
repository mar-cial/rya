/*
* Created by cesarmarcial on 10/09/21
*/

// general imports

// components imports

// function imports
import Link from "next/link";
import Image from 'next/image'

// Beginning of component: AsideSectionPhoto

const AsideSectionPhoto = ({imageTitle, imageSrc, imageLink, imgAlt}) => {
    return (
        <aside className={'border-2 border-black grid rounded-md p-2'}>
           <header className={'flex justify-center py-2 border-b-2'}>
               <h3 className={'font-bold text-xl'}>
                   {imageTitle}
               </h3>
           </header>
            <div className={'py-2'}>
                <Image src={imageSrc} alt={imgAlt} layout={'responsive'} width={1920} height={1080} className={'rounded-md'}/>
            </div>
            <Link href={imageLink}>
                <a className={'flex justify-center bg-black text-white font-bold rounded-md py-1'}>Saber más</a>
            </Link>
        </aside>
    )
}

export default AsideSectionPhoto
