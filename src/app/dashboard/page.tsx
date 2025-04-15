"use client";
import { signOut, useSession } from "../../lib/auth-client";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Navbar simple */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">MiApp</span>
            </div>
            <button
              onClick={signOut}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Panel de Control
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            {useSession().data?.user.name}, bienvenido a tu área personalizada
          </p>
        </div>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            { title: "Proyectos", value: "12", change: "+2" },
            { title: "Tareas", value: "8", change: "-3" },
            { title: "Mensajes", value: "5", change: "+1" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {item.title}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {item.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg
                          className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Increased by</span>
                        {item.change}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección con imagen de perrito */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Hola humano!
              </h2>
              <p className="text-gray-600 mb-4">
                Parece que todo está bajo control. ¿Necesitas ayuda con algo o
                prefieres que te haga compañía mientras trabajas?
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Ver más estadísticas
              </button>
            </div>
            <div className="md:w-1/2 p-6 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Perrito feliz"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// "use client";
// import { signOut } from "../../lib/auth-client";

// export default function Dashboard() {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-4xl font-bold">Dashboard</h1>
//             <p className="mt-4 text-lg">Welcome to the Dashboard!</p>
//             <button onClick={signOut} className="flex left-1/2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Log Out
//             </button>
//         </div>
//     );
// }