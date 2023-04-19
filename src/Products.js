import React,{useState,useEffect} from "react"
import axios from "axios"
import {Link,useParams} from 'react-router-dom'

const Products=()=>{
    const [loading,setLoading] = useState(true);
    const [poduct,setProduct]= useState(null);
    const {ProducID} = useParams()

    const fetchData = async ()=>{
        try {
            const {data}= await axios.get(`/api/products?id=${prouductID}`)
            setProduct(data)
        } catch (error) {
            
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    if(loading){
        return(
            <section className='section section-center'>
                <h2>loading</h2>
            </section>
        )
    }
        const {fields} = product
        const {name,desc.price,image}=fields

    console.log(name)
    return (<section className='section section-center'>
                <Link to='/' className='link'>
                    back home
                </Link>
                <div>
                    <div className="title">
                        <h2>{name}</h2>
                        <div className="title-underline">
                        <article className="single-underline">
                            <img className="single-product-omg" src={image[0].url} alt={name}></img>
                        </article>
                        </div>
                    </div>
                </div>
            </section>)
}

export default Products