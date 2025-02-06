// import React from 'react'
// import { useState } from 'react'
// import Child from './Child';

// function Parent() {
//   let [childData,childdataHandler]=useState(0);
//   let [x, setX]=useState(10);
//   function incrementx(){
//     setX(x+1)
//   }
//   function getData(y){
//     childdataHandler(y)
//   }
//   function incrementchild(){
//     childdataHandler(childData+1)
//   }

//   return (
//     <div className='parent bg-secondary text-white px-5 py-5'>
//        <h1>the parent data is {x}</h1>
//        <button className='btn bg-danger text-white my-5' onClick={()=>{incrementchild()}}>increment child State</button>
//        <Child getData={getData} incrementx={incrementx}/>
//     </div>
//   )
// }

// export default Parent
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  let [childData, setChildData] = useState(0);
  let [x, setX] = useState(10);

  function incrementX() {
    setX(x + 1);
  }

  function getData(y) {
    setChildData(y);
  }

  function incrementChild() {
    setChildData(childData+1);
    console.log(childData)
  }

  return (
    <div className=' parent bg-secondary text-white px-5 py-5 alignment-center'>
      <h1>the parent data is {x}</h1>
      <button className='btn bg-white text-success my-5' onClick={()=>setX(x+1)}>
        increment parent State
      </button>
      <button className='btn bg-danger text-white my-5 mx-5' onClick={incrementChild}>
        increment child State
      </button>
      <Child getData={getData} incrementX={incrementX} childData={childData} />
    </div>
  );
}

export default Parent;
