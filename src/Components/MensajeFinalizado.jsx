
const MensajeFinalizado = ({informacionFinal}) => {

        console.log(informacionFinal)
return (
    <div>
            <div className="m-20">
                <p className="text-black text-xl">Su compra fue registrada con exito!</p>
            </div>

        {
            informacionFinal.map((producto, index)=> 

                <div key={index} className="  m-20">
                    <div className="text-black"><span>Nombre:</span>{producto.nombre}</div>
                    <div className="text-black"><span>Apellido:</span> {producto.apellido}</div>
                    <div className="text-black"><span>El total $</span>{producto.gastoTotal}</div>
                    
                </div>
            )
        }
            <div>
                <p className="text-red-900 text-2xl">Gracias por confiar en nosotros, lo esperamos pronto!</p>
            </div>
    </div>
  )
}

export default MensajeFinalizado