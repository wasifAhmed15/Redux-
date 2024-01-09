import axios from "axios"
import { useEffect,useState } from "react"
import WAbutton from "../Component/WAbutton"
import { add } from "../config/redux/Reducer/CartSlice"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
export default function Home() {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    let [data,setdata]=useState<any>([])
useEffect(()=>{
axios .get("https://fakestoreapi.com/products").then((res:any)=>{

setdata([...res.data])

})
},[])

const Selector = useSelector((state:any)=>state.Cart)

const Addtocard = (Product:any)=>{
dispatch(add(Product))
}

    return <>
<div className="d-flex justify-content-end me-5">
   


    <h1 onClick={()=>Navigate('/Detail')}>{Selector.length}</h1>
   
</div>



        <div className="container-fluid">
            <div className="row py-5 d-flex justify-content-center">
                {
                    data.map((x:any,i:number)=>{
                        return <>
                        <div className="col-lg-4 col-md-4 col-sm-6 py-2 border my-3 mx-2 w-25 h-25">
                            <div className=" text-center">
                                <img src={x.image} alt="" width={50}/>
                              <p>{x.title}</p>
                              <p>{x.category}</p>
                              <p>{x.description}</p>
                              <p>{x.price}</p>
                              <WAbutton title="Add To Card" className={"btn btn-primary"} onClick={()=>Addtocard(x)}/>
                             
                            </div>
                        </div>
                        
                        </>
                    })
                }
                
      
        </div>
    
        </div>
 
    </>
}