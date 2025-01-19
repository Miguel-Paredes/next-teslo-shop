import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCard= [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]

export default function (){
    return(
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title
                    title="Verificar Orden"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl text-center mb-2">Ajustar elementos</span>
                        <div className="w-full text-center mb-4 border-b border-gray-400 pb-2">
                            <Link href='/cart' className="underline mb-5 hover:text-blue-500 w-max">
                                Editar carrito
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
                            <p className="mb-5">
                                {/* Disclaimer */}
                                <span className="text-xs">
                                    Al hacer click en "Colocar Orden", aceptas nuestros 
                                    <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
                                </span>
                            </p>
                            <Link
                                className="flex btn-primary justify-center"
                                href={'/orders/123'}
                            >
                                Realizar Orden
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}