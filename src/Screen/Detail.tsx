import { useSelector } from "react-redux"
export default function Detail(){
    const data = useSelector((state:any)=>
         state.Cart
    )
    return <>

<div className="row">
  {
    data.map((x:any,i:number)=>{
      return  <div className="col-lg-4">
               <img src={x.image} alt="" width={50}/>
                              <p>{x.title}</p>
                              <p>{x.category}</p>
                              <p>{x.description}</p>
                              <p>{x.price}</p>


        </div>

    })
  }
</div>
    
    
    </>
}