import { First } from "./first"


export const Second = () =>{
    return <div>
    <First name="Ali" lastname="Raza" onClick={()=>console.log("testing")}>
        Test
        </First>
    </div>
}