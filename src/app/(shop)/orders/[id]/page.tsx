import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCard= [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

interface Props {
    params:{
        id: string
    }
}

export default function ( { params } : Props){
    const { id } = params
    return(
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title
                    title={`Orden #${ id }`}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <div className={
                            clsx(
                                "flex items-center justify-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    "bg-red-500" : false,
                                    "bg-green-700": true
                                }
                            )
                        }>
                           <IoCardOutline size={ 30 }/> 
                           {/* <span className="mx-2">Pendiente de pago</span> */}
                           <span className="mx-2">Orden pagada</span>
                        </div>
                    {/* Items */}
                        {
                            productsInCard.map( productos => (
                                <div
                                    key={ productos.slug }
                                    className="flex mb-5"
                                >
                                    <Image
                                        src={ `/products/${productos.images[0]}` }
                                        width={ 100 }
                                        height={ 100 }
                                        style={{
                                            width: '100px',
                                            height: '100px'
                                        }}
                                        alt={ productos.title }
                                        className="mr-5 rounded"
                                    />
                                    <div className="w-full text-center">
                                        <p>{ productos.title }</p>
                                        <p>${ productos.price } x 3</p>
                                        <p className="font-semibold">Subtotal: { productos.price * 3 }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Checkout - Resumen de Orden */}
                    <div className="bg-white rounded-xl shadow-xl p-7">
                        <h2 className="text-2xl mb-2">Dirrección de Entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Miguel Paredes</p>
                            <p>Av. Siempre viva 123</p>
                            <p>Col. Centro</p>
                            <p>Alcaldía Cuauhtémoc</p>
                            <p>CP: 3456</p>
                            <p>123.123.132</p>
                        </div>
                        {/* Divider */}
                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>
                        <h2 className="text-2xl mb-2 text-center font-semibold">Resumen de Orden</h2>
                        <div className="grid grid-cols-2">
                            <span>No. de Productos</span>
                            <span className="text-right">3 artículos</span>
                            
                            <span>Subtotal:</span>
                            <span className="text-right">$100</span>
                            
                            <span>Impuestos (15%):</span>
                            <span className="text-right">$100</span>
                            
                            <span className="text-2xl mt-5">Total</span>
                            <span className="text-right mt-5 text-2xl">$100</span>
                        </div>
                        <div className="mt-5 mb-2 w-full">
                            <div className={
                                clsx(
                                    "flex items-center justify-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                    {
                                        "bg-red-500" : false,
                                        "bg-green-700": true
                                    }
                                )
                            }>
                                <IoCardOutline size={ 30 }/> 
                                {/* <span className="mx-2">Pendiente de pago</span> */}
                                <span className="mx-2">Orden pagada</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}