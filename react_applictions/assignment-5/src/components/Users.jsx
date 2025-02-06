import {useState }from 'react'
function Users(props) {
    let [clicked,setClick]= useState(0);
    function handleClick(){
        if(clicked===0){
            props.increaceusercount(props.usercount+1)
            setClick(1)
        }
    }
  return (
    <div className='card    px-3 py-3'>
        <h1 className="text-danger">{props.name}</h1>
        <h3>{props.email}</h3>
        <h3>{props.phone}</h3>
        <h3>CITY: {props.address.city}</h3>
        

        <button className="btn bg-success text-white" onClick={()=>(handleClick())}>
            {clicked==1 ? 'selected' : '+' }
        </button>
    </div>
  )
}

export default Users