
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {context} from './MyProvider ';
import ItemCount from './ItemCount';


const ItemDetail = ({products}) => {


    const [estadoBtn, setEstadoBtn]= useState(true);
    const { agregarProducto, verificarProductoExistente} = useContext(context)
    
    const onAdd= (numero)=>{
        
        products.cantidad = numero
        const {cantidad} = products;
        const {id} = products;
    
        verificarProductoExistente(id);
        agregarProducto(products,cantidad);
        setEstadoBtn(false); 
    }

    return (

<section>
  <div class="relative px-4 py-8 mx-auto max-w-screen-xl">

    <div>
      <h1 class="text-2xl font-bold lg:text-3xl text-black">
        <li key={products.nombre}>    
                {products.nombre}
        </li>
      </h1>
    </div>

    <div class="grid gap-8 lg:items-start lg:grid-cols-4 ">
      <div class="lg:col-span-3">
        <div class="relative mt-4">
          <img
                src={products.img} alt ={products.img}
            class="w-full rounded-xl h-72 lg:h-[540px] object-cover"
          />

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>

            <span class="text-xs ml-1.5">
              Hover to zoom
            </span>
          </div>
        </div>

        <ul class="flex mt-1 gap-1 ">
          <li>
            <img class="object-cover w-16 h-16 rounded-md" src={products.img} alt ={products.img}  />
          </li>

          <li>
            <img class="object-cover w-16 h-16 rounded-md" src="../../photos/tee-green-hanger-3.png" alt="" />
          </li>

          <li>
            <img class="object-cover w-16 h-16 rounded-md" src="../../photos/tee-green-person.png" alt="" />
          </li>

          <li>
            <img class="object-cover w-16 h-16 rounded-md" src="../../photos/tee-green-person-2.png" alt="" />
          </li>
        </ul>
      </div>

      <div class="lg:top-0 lg:sticky text-black">
        <form class="space-y-4 lg:pt-8 border-black">
          <fieldset>
            <legend class="text-lg font-bold">
              Color
            </legend>
            <div class="flex mt-2 space-x-1">
              <label for="color_green" class="cursor-pointer">
                <input type="radio" id="color_green" name="color" class="sr-only peer" checked />

                <span class="block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
              </label>

              <label for="color_blue" class="cursor-pointer">
                <input type="radio" id="color_blue" name="color" class="sr-only peer" />

                <span class="block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
              </label>

              <label for="color_pink" class="cursor-pointer">
                <input type="radio" id="color_pink" name="color" class="sr-only peer" />

                <span class="block w-6 h-6 bg-pink-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
              </label>

              <label for="color_red" class="cursor-pointer">
                <input type="radio" id="color_red" name="color" class="sr-only peer" />

                <span class="block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
              </label>

              <label for="color_indigo" class="cursor-pointer">
                <input type="radio" id="color_indigo" name="color" class="sr-only peer" />

                <span class="block w-6 h-6 bg-indigo-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
              </label>
            </div>
          </fieldset>


          <div class="p-4 bg-gray-100  border-black">
            <p class="text-sm">
              <span class="block border-zinc-800">
                Articulo 20% Descuento
              </span>
            </p>
          </div>

          <div>
            <p class="text-xl font-bold">
                <li key={products.precio}>    
                    $ {products.precio}
                </li>
            </p>
          </div>
<div>  
</div>
</form>
    <div class="mt-5">
        {   
            estadoBtn? <ItemCount onAdd={onAdd}/>
            :
            <Link to={'/category/Cart'}>
                <div className='Contenedor-Btn-Comprar'>
                    <button className='Btn-Comprar'> ir al carrito</button>
                </div>
            </Link>  
        }
    </div>
</div>

      <div class="lg:col-span-3 text-black" >
        <div class="prose max-w-none">
          <p>
            <li key={products.descripcion}>    
                {products.descripcion}
            </li>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!</p>
          <iframe src="https://www.youtube.com/watch?v=YVz-8fOhc3s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

)}

export default ItemDetail