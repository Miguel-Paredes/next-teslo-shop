import { titleFont } from '@/config/font';
import Link from 'next/link';

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-20">

      <h1 className={ `${ titleFont.className } text-4xl mb-5 text-center` }>Nueva Cuenta</h1>

      <div className="flex flex-col">

        <label htmlFor="nombre">Nombre Completo</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text" />

        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />


        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />

        <button
          
          className="btn-primary">
          Crear Cuenta
        </button>

        <Link
          href="/auth/login" 
          className='mt-2 p-2 text-center hover:underline transition-all'
          >
          Regresar
        </Link>


        {/* divisor line */ }
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/login" 
          className='bg-gray-400 p-2 text-center hover:bg-blue-300 hover:underline transition-all duration-200 rounded-lg' 
          >
          Ingresar
        </Link>

      </div>
    </div>
  );
}