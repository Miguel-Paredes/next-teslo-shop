import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCard= [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

export default function (){

    // redirect('/empty')


    return(
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title
                    title="Cartito"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl text-center mb-2">Agregar mas items</span>
                        <div className="w-full text-center mb-4 border-b border-gray-400 pb-2">
                            <Link href='/' className="underline mb-5 hover:text-blue-500 w-max">
                                Continua Comprando
                            </Link>
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
                                        <p>${ productos.price }</p>
                                        <div className="flex justify-center">
                                            <QuantitySelector
                                                quantity={3}
                                            />
                                        </div>
                                        <button className="underline mt-3 hover:text-blue-500">
                                            Remover
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* Checkout - Resumen de Orden */}
                    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
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
                            <Link
                                className="flex btn-primary justify-center"
                                href={'/checkout/address'}
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}