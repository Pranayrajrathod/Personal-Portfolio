// import React from 'react'
// import { useState } from 'react'
// function Child(props) {
//     let [y,setY]=useState(100)
//     // let y=100
//     // console.log(props)
//     // function incrementchildfunction(){
//     //     setY(y+1)
//     // }
//   return (
//     <div className='bg-primary text-white py-5 px=5'>
//         <h1 className='heading mx-5 py-2'>child data is {y}</h1>
//         <button className='btn bg-dark text-white mx-5' onClick={()=>props.incrementx()}>increment parent data</button>
//         <button className='btn bg-warning mx-5' onClick={({y})=>props.getData({data:y})}>send data</button>
//     </div>
//   )
// }

// export default Child
import React, { useState, useEffect } from 'react';

function Child(props) {
  let [y, setY] = useState(100);

  useEffect(() => {
    setY(y+1);
  }, [props.childData]);
  

  return (
    <div className='bg-primary text-white py-5 px-5'>
      <h1 className='heading mx-5 py-2'>child data is {y}</h1>
      <button className='btn bg-dark text-white mx-5' onClick={props.incrementX}>
        increment parent data
      </button>
      <button className='btn bg-warning mx-5' onClick={() => setY(y+1)}>
        increment Child
      </button>
    </div>
  );
}

export default Child;
