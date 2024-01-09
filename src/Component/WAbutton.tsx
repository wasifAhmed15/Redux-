type WAbuttonprops ={
title : string,
onClick? : ()=>void
className?: any
}
export default function WAbutton (props:WAbuttonprops){
let {title,onClick,className}=props
return <>
<button className={className} onClick={onClick}>{title}</button>
</>

}