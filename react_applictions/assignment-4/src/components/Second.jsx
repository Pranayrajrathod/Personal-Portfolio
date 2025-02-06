import {useState,useEffect} from 'react'
import "../components/Second.css"
function Second() {
    let [dataset,setData]=useState([])
    let [err,setErr]=useState(null)
    // initial state of hook
    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(dataList=>setData(dataList.data))
        .catch((err)=>{setErr(err)})
    },[])
  return (
    <div>
        <h1>ASSIGNMENT 4 USE EFFECT HOOK</h1>
        {
            dataset.length===0 ?  (<div className="spinner-border text-primary display-1 mt-5">
            </div>) : null
        }
        {
            err!=null ? (<h1>error occured : {err.message}</h1>):
        (
        <table>
        <thead>
                <tr>
                <td>id</td>
                <td>image</td>
                <td>full name</td>
                <td>email</td>
                </tr>
            </thead>
        <tbody>
        {           
            dataset.map((ids)=>(<tr key={ids.id}>
                <td>{ids.id}</td>
                <td><img src={ids.avatar}></img></td>
                <td>{ids.first_name +" "+ids.last_name}</td>
                <td>{ids.email}</td>
            </tr>))
        }
        </tbody>
        </table>
            )
        }
    </div>
    
//      <div>
//         {console.log(err)}
//         <h1>ASSIGNMENT 4 USE EFFECT HOOK</h1>

//         {
//             err!==null && (<h1>ERROR OCCURED : {err.message}</h1>) 
//         }
//         {
//             err===null && dataset.length===0 && 
//             console.log("here") &&
//             (<div className="spinner-border text-primary display-1 mt-5">
// </div>)        
//         }
//         {
//             err==null && dataset.length!==0 && (
//                 <table>
//         <thead>
//                 <tr>
//                 <td>id</td>
//                 <td>image</td>
//                 <td>full name</td>
//                 <td>email</td>
//                 </tr>
//             </thead>
//         <tbody>
//         {           
//             dataset.map((ids)=>(<tr key={ids.id}>
//                 <td>{ids.id}</td>
//                 <td><img src={ids.avatar}></img></td>
//                 <td>{ids.first_name +" "+ids.last_name}</td>
//                 <td>{ids.email}</td>
//             </tr>))
//         }
//         </tbody>
//         </table>
//             )
//         }
//     </div>
  )
}

export default Second