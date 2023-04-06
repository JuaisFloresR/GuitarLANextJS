import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

function Nosotros () {
    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, GuitarLA tienda de musica'}
            >
            <main className='contenedor'>
                <h1 className='heading'>
                    Nosotros
                </h1>
                <div className={styles.contenido}>
                     <Image src ='/img/nosotros.jpg' width={1000} height={800} alt ='Imagen sobre nosotros'></Image>
                    <div>
                        <p>
                        Nunc vel iaculis risus, eget ullamcorper nunc. Cras vehicula ipsum id urna lacinia, quis fringilla nisi mollis. Phasellus rhoncus erat magna, eget pellentesque turpis fermentum nec. Proin blandit rhoncus turpis, sed pellentesque neque commodo sed. In feugiat pellentesque nulla, non tempus velit dictum et. Etiam sagittis sodales neque sit amet molestie. Integer a tellus sit amet lorem rutrum rhoncus. Nam gravida vestibulum est. Pellentesque a ornare libero, aliquam gravida turpis. Pellentesque tincidunt tortor sit amet tristique rhoncus.
                        </p>
                        <p>
                        Duis ante diam, suscipit vel tempor sed, placerat aliquet ante. Pellentesque convallis tempor lobortis. Donec rutrum augue blandit lacus bibendum aliquam. Fusce at orci eu nunc suscipit cursus.
                        </p>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

export default Nosotros