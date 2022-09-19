import { Link } from 'react-router-dom';

const MensajeFinalizado = ({informacionFinal}) => {
return (
    <div>
            
            <div className=" mt-20 mb-0">
                <p className="text-black text-2xl">Orden de compra:</p>
            </div>
        {
            informacionFinal.map((producto, index)=> 

                <div key={index} className="grid sm:grid-cols-3 lg:grid-cols-3 gap-1 m-10 mb-20 p-3 bg-black  ">
                    <div className="text-white m-1 p-2"><div>Nombre </div>{producto.nombre}</div>
                    <div className="text-white m-1 p-2"><div>Apellido </div> {producto.apellido}</div>
                    <div className="text-white m-1 p-2"><div>Total</div> <span>$</span>{producto.gastoTotal}</div>
                    
                </div>
            )
        }
            <div>
                <p className="text-red-900 text-2xl">Gracias por confiar en nosotros, lo esperamos pronto!</p>
                <div className="flex flex-wrap justify-center mt-8 gap-4">
                    <Link to={"/"}>
                        <button className='bg-black p-1 rounded-lg'>
                            Volver al Inicio
                        </button>
                    </Link>
                </div>
            </div>
    </div>
)
}

export default MensajeFinalizado