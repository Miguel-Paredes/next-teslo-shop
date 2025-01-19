'use client';
import { Product } from "@/interfaces/products.interface"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

interface Props {
    product : Product
}

export const ProductGridItem = ( {  product } : Props) => {
    const [displayImage, setDisplayImage] = useState( product.images[0] )
    return(
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${ product.slug }`}>
                <Image
                    src={`/products/${ displayImage }`}
                    className="w-full object-cover rounded transition-all"
                    width={ 500 }
                    height={ 500 }
                    alt={ product.title }
                    onMouseEnter={() => {
                        setDisplayImage(product.images[1])
                    }}
                    onMouseLeave={() => {
                        setDisplayImage(product.images[0])
                    }}
                />
            </Link>
            <div className="p-4 flex flex-col">
                <Link
                    href={`/product/${ product.slug }`}
                    className="text-center hover:underline hover:text-blue-600"
                >{product.title}</Link>
                <span className="font-bold text-center">${product.price}</span>
            </div>
        </div>
    )
}