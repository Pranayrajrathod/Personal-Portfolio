// -----------------------------------------------------------------
// the code is for the components parent and child which are used by 
// me to design child to parent and parent to child interaction demo
// -----------------------------------------------------------------

// import React from 'react'
// import Parent from './components/Parent'

// function App() {
//   return (
//     <div>
//       <Parent/>
//     </div>

//   )
// }

// export default App



// ==============================================================
// the below code belongs to assignment 5
// ==============================================================

import React from 'react'
import {useState, useEffect} from 'react'
import Users from './components/Users'
function App () {
  let [usercount,increaceusercount]=useState(0)
  let [posts,setPosts]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(postslist=>setPosts(postslist))
    .catch((err)=>console.log(err))
  },[])
  return (
      <div className='bg-secondary text-center  px-1 py-1  text-warning'>
      <h1 className='text-center mx-5 my-5 bg-warning rounded-5 text-success'>user count : {usercount}</h1>
       {posts.map((element=>
       <div className="my-3 d-flex mx-5 px-3 flex-wrap" key={element.id}>
        <div className="flex-wrap" >
          <Users usercount={usercount} increaceusercount={increaceusercount} id={element.id} name={element.name} email={element.email} address={element.address} phone={element.phone} />
        </div>
       </div>
       ))}
       </div>

  )
}
export default App