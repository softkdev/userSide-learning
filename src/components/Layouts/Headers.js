import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Headers = () => {
    return (
        <div className="container mx-auto flex py-3">
            <ul className="w-7/12 flex text-center mr-auto">
                <li className="w-3/12">
                    <Link href="/"><a className="text-xl font-light"> خانه</a></Link>
                </li>
                <li className="w-3/12">
                    <Link href="/contact"><a className="text-xl font-light">تماس با ما</a></Link>
                </li>
                <li className="w-3/12">
                    <Link href="/about"><a className="text-xl font-light">درباره ما</a></Link>
                </li>
                <li className="w-3/12">
                    <Link href="/feedback"><a className="text-xl font-light">بازخورد</a></Link>
                </li>
            </ul>
            <div className="w-3/12">
                <span className="font-bold text-xl">
                    لوگو
                </span>
                {/* <Image src="assets/images/logo.png" /> */}
            </div>
        </div>
    )
}

export default Headers