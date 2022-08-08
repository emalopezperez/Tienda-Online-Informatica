import React, { useState } from 'react';
import '../App.css';


const Formulario = () => {

    const [form, setForm] = useState('');

    const [descripcion, setDescripcion] = useState('');

    const guardarDatos= (e)=> {

        e.preventDefault();
        
        if(!form.trim()){
            console.log("esta vacio fromr");

            return
        }

        if(!descripcion.trim()){
            console.log("esta vacio descri");

            return
        }

        console.log("procesado "+descripcion+ form);
        
        e.target.reset();

    }

    return (

        <div>
            <form onSubmit={guardarDatos} >
                <input type="text"placeholder="Ingrese Descripcion"
                onChange={ e => setDescripcion(e.target.value) }
                />

                <input type="text" placeholder="Ingrese Descripcion"
                onChange={ e => setForm(e.target.value) }
                />

                <button className="btn btn-primary btn-block" type="submit">Agregar</button>

                
            </form>
        </div>
    )
}

export default Formulario