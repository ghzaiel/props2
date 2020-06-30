import React from 'react'
import './Style.css'


 function profile({x}) {
 
 
    // const handleClick = () =>{
        
    //     alert(x.bio);
        
    // }

    return (
       
              <table className="produit">
            {x.map(el=>(
                <tr >
                <img src={el.src}/>
                <>
                <td>{el.fullName}</td>
                <td><button onClick={()=>alert(el.fullName)}>alert </button></td>
                </>
                </tr>
               
             ))}
        </table>
    )
}
export default profile