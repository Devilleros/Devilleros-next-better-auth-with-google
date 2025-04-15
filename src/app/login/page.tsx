"use client";
import Link from "next/link";
import { signIn } from "../../lib/auth-client";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-6 text-center">
            <h1 className="text-3xl font-bold text-white">Bienvenido</h1>
            <p className="text-blue-100 mt-2">Inicia sesión para continuar</p>
          </div>

          <div className="p-8">

            <button
              onClick={signIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg shadow-sm px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Iniciar sesión con Google
            </button>
            <Link href={"/"} className="text-blue-600">{`<< volver al inicio`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { signIn } from "../../lib/auth-client";

// export default function Login() {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-4xl font-bold">Login</h1>
//             <p className="mt-4 text-lg">Welcome to the Login!</p>
//             <button onClick={signIn} className="flex left-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Iniciar sesión con Google
//             </button>
//         </div>
//     );
// }
