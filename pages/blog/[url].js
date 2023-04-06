import Layout from "@/components/layout"
import { formatearFecha } from "@/utils/helpers"
import Image from "next/image"
import styles from '../../styles/blog.module.css'



function Post({post}) {
    console.log(post)
    const {titulo,contenido,imagen,publishedAt} =post[0].attributes
    return (
        <Layout
        title= {` ${titulo}`}
        >
    <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagen.data.attributes.url} width={1000} height={400} alt={`imagen blog ${titulo}`}/>

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
        </div>
    </article>
        </Layout>
        
    )
    }

export default Post


export async function getServerSideProps({query: {url}}){

    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)

    const {data:post}=  await response.json()
    console.log(post)
    

    return{
        props:{
            post

        }
    }


}