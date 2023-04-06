import Guitarra from '@/components/guitarra'
import Layout from '@/components/layout'
import styles from '../styles/grid.module.css'

function Tienda ({guitarras}) {


    return (
        <Layout
            title={'Tienda Virtual'}
            description={'Tienda Virtual, venta de guitarras, GuitarLA'}
            >
            <main className='contenedor'>
                <h1 className="heading">Nuestra Coleccion</h1>
                <div className={styles.grid}>
                {guitarras?.map( guitarra =>(
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
                </div>
            </main>
        </Layout>
    )
}

export default Tienda

// export async function getStaticProps(){
//     const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await response.json()
//     console.log(guitarras)
//     return {
//         props:{
//             guitarras
//         }
//     }
// }

export async function getServerSideProps(){
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await response.json()
    return {
        props:{
            guitarras
        }
    }
}