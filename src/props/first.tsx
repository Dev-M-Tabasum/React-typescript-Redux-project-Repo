
interface FisrtComponent{
    name:string
    lastname:string
    onClick: ()=>void
    children: React.ReactNode
}

// export const First= ({name, lastname, onClick}: FisrtComponent) =>{
//     return <div>
//         <h3>{name}</h3>
//         <h3>{lastname}</h3>
//         <button onClick={onClick}>Click Me</button>

//     </div>
// }

export const First: React.FC<FisrtComponent>= ({name, lastname, onClick, children}) =>{
    return <div>
        <h3>{name}</h3>
        <h3>{lastname}</h3>
        <button onClick={onClick}>Click Me</button>
        {children}

    </div>
}