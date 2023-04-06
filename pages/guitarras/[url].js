import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import { useState } from "react"


function Guitarra({guitarra,agregarCarrito}) {

    const [cantidad,setCantidad] = useState(0)

    const {nombre, descripcion,imagen, precio} = guitarra[0].attributes
    console.log(cantidad)

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(cantidad < 1){
            alert('Cantidad no valida')
            return
        }

        //Construir un objeto

        const guitarraSeleccionada= {
            id: guitarra[0].id,
            nombre,
            descripcion,
            precio,
            imagen: imagen.data.attributes.url,
            cantidad
        }

        //Pasando la informacion al context

        agregarCarrito(guitarraSeleccionada)
    }
    return (
        <Layout
            title={`GuitarLA - Guitarra  ${nombre}`}
            description={'Sobre nosotros, GuitarLA tienda de musica'}
            >
        <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={300} height={100} alt={`Imagen guitarra ${nombre}`}/>
  
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form className={styles.formulario} 
             onSubmit={handleSubmit}
          >
            <label htmlFor="Cantidad">Cantidad</label>
            <select 
                onChange={e => setCantidad(parseInt(e.target.value))}
                id="cantidad">
                <option value="0">--Seleccione--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
            <input 
            type="submit"
            value='Agregar al Carrito' />
          </form>
        </div>
  
      </div>
      </Layout>
    )
}

export default Guitarra


export async function getStaticPaths(){
    const response = await fetch(`${process.env.API_URL}/guitarras`)
    const {data } = await response.json()

    const paths = data.map(guitarra => ({
        params:{
            url: guitarra.attributes.url
        }
    }))

    console.log(paths)
    return{
        paths,
        fallback: false
    }
}
export async function getStaticProps({params: {url}}){

    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

    const {data: guitarra}=  await response.json()

    return{
        props:{
            guitarra

        }
    }


}

// export async function getServerSideProps({query: {url}}){

//     const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

//     const {data: guitarra}=  await response.json()

//     return{
//         props:{
//             guitarra

//         }
//     }


// }