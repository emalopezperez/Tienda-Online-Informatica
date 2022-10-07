import { useState } from "react";
import { db } from "../db/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import "../styles/contacto.css";

const Contacto = () => {
  const datosIniciales = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };
  const [datos, setDatos] = useState(datosIniciales);

  const handleImputChange = (e) => {
    const { name, value } = e.target;

    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      datos.correo === "" ||
      datos.nombre === "" ||
      datos.asunto === "" ||
      datos.mensaje === ""
    ) {
      toast.error("Error, todos los campos son obligatorios", {
        duration: 2000,
      });
    } else {
      const orderCollection = collection(db, "usuarios");
      const consulta = addDoc(orderCollection, datos);

      setDatos({ ...datosIniciales });

      toast.success("Gracias por comunicarse con nosotros", {
        duration: 1000,
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className="text-black m-8 text-4xl">
        <h2 className="italic ">Contacto</h2>
      </div>
      <div className="flex gap-3 basis-full flex-wrap sm:flex-nowrap">
        <div className="w-full  p-4 bg-black ">
          <div className="content">
            <div className="Informacion-Cart">
              <h2 className="text-white text-2xl mb-11 py-2 italic" >
                COMUNÍCATE CON NOSOTROS
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-lg py-3 px-5 bg-gray-200 mb-8"
            >
              <div className="mb-6">
                <label
                  htmlFor="Nombre"
                  className="block text-black text-left font-bold"
                >
                  {" "}
                  Ingrese su Nombre
                </label>
                <input
                  id="Nombre"
                  type="text"
                  className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-300 rounded-md text-black"
                  onChange={handleImputChange}
                  name="nombre"
                  value={datos.nombre}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="correo"
                  className="text-black font-bold text-left"
                >
                  {" "}
                  Ingrese su correo
                </label>
                <input
                  id="correo"
                  type="text"
                  className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black"
                  onChange={handleImputChange}
                  name="correo"
                  value={datos.correo}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="asunto"
                  className="text-black font-bold text-left"
                >
                  {" "}
                  Asunto
                </label>
                <input
                  id="asunto"
                  type="text"
                  className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black"
                  onChange={handleImputChange}
                  name="asunto"
                  value={datos.asunto}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="mensaj"
                  className="text-black font-bold text-left"
                >
                  {" "}
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  type="textearea"
                  className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black"
                  onChange={handleImputChange}
                  name="mensaje"
                  value={datos.mensaje}
                />
              </div>

              <input
                type="submit"
                className=" w-full p-3 text-black cursor-pointer rounded-md "
                value="Enviar"
              />
            </form>
          </div>
        </div>

        <div className="w-full  p-4 bg-black ">
          <div>
            <div className="flex flex-wrap m-4">
              <div>
                <h1 className="py-2 text-white">PREGUNTAS Y SUGERENCIAS</h1>
                <p className="py-8 text-white">
                  En Hering Hardware Store buscamos la mejor experiencia para
                  nuestros clientes. Sabemos lo que es estar de un lado y del
                  otro del mostrador y, por lo tanto, que cada experiencia,
                  inquietudes y necesidades son únicas.
                </p>
                <p className="text-white">
                  Si ya has revisado nuestro apartado de Preguntas Frecuentes y
                  no has encontrado respuesta, agradecemos te contactes con
                  nosotros de forma directa, de manera que podamos ayudarte lo
                  antes posible. Además, toda sugerencia es bienvenida.
                  Apuntamos a mejorar día a día para brindarte lo mejor.
                </p>
                <p className="py-10 text-white">
                  Desde ya, ¡muchas gracias! El equipo de HERING.
                </p>
              </div>
              <div>
                <h2 className="m-2 py-12 text-white">OTROS MEDIOS:</h2>
                <ul className="flex justify-center mt-2 gap-6 md:gap-8 sm:justify-start">
                  <li>
                    <a
                      href="https://github.com/emalopezperez"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/emanuel_lopezperez/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/emanuel-lopez-b49824103/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
