"use client";
import { signOut, useSession } from "../lib/auth-client";
import Link from "next/link";

export default function Home() {
  const {
    data: session,
    isPending,
    error,
    refetch
  } = useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                {session ? (
                  <>Bienvenido de vuelta</>
                ) : (
                  <>Bienvenido a nuestra plataforma</>
                )}
              </h1>
              <p className="text-gray-600">
                {session
                  ? "Estás autenticado y puedes acceder a todo el contenido"
                  : "Inicia sesión para acceder a todas las funciones"}
              </p>
            </div>

            {session ? (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-800">
                        {session.user.name}
                      </h2>
                      <p className="text-gray-600">{session.user.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => signOut()}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Cerrar sesión
                  </button>
                  <Link
                    href="/dashboard"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors"
                  >
                    Ir al Dashboard
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4 pt-4">
                <Link
                  href="/login"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
                >
                  Iniciar sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// "use client";
// import { signOut, useSession } from "../lib/auth-client";

// export default function Home() {

//   const {
//     data: session,
//     isPending, //loading state
//     error, //error object
//     refetch //refetch the session
//   } = useSession()

//   return (
//     <div>
//       <main className="absolute top-1/2 left-1/2 -translate-x-1/2
//        -translate-y-1/2">
//         <h1
//           className="text-5xl font-extrabold text-center 
//        text-white-600 drop-shadow-md">
//           Bienvenido al HOME protegido
//         </h1>
//         <button onClick={signOut} className="flex left-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           cerrar sesion
//         </button>
//         <p>{isPending}</p>
//         <p>Hola de nuevo: {session?.user.name}</p>
//         <p>{session?.user.email}</p>
//         <p>{error?.error}</p>

//       </main>
//     </div>
//   );
// }