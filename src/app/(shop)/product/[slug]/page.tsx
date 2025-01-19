// 'use client';
import { ProductMovileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/components"
import { titleFont } from "@/config/font"
import { initialData } from "@/seed/seed"
// import Image from "next/image"
import { notFound } from "next/navigation"
// import { useState } from "react"


interface Props{
    params : {
        // ? slug se coloca por el nombre de la carpeta
        slug : string
    }
}

export default function ( { params } : Props ){
    
    const { slug } = params
    
    const producto = initialData.products.find( products => products.slug === slug)
    if(!producto){
        notFound()
    }
    // const [displayImage, setDisplayImage] = useState(producto.images[0])
    return(
        <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
            {/* Slideshow */}
            <div className="col-span-1 md:col-span-2">
                {/* Desktop SlideShow */}
                <ProductSlideShow
                    title={producto.title}
                    images={producto.images}
                    className="hidden md:block"
                />
                {/* Movil SlideShow */}
                <ProductMovileSlideShow
                    title={producto.title}
                    images={producto.images}
                    className="block md:hidden"
                />
            </div>
            {/* Detalles */}
            <div className="col-span-1 px-5 ">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl text-center`}> { producto.title } </h1>
                <p className="text-lg mb-5 text-center"> ${ producto.price } </p>
                {/* Selector de tallas */}
                <SizeSelector
                    selectedSize={producto.sizes[0]}
                    aviableSize={producto.sizes}

                />
                {/* Selector de cantidad */}
                <QuantitySelector
                    quantity={1}
                />
                {/* Button */}
                <button className="btn-primary my-5 rounded-full">
                    Agregar al carrito
                </button>
                {/* Descripcion */}
                <h3 className="font-bold text-sm">Descripción:</h3>
                <p className="font-light text-justify"> { producto.description } </p>
            </div>
        </div>
    )
}