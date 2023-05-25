// import { useState } from 'react';

import Stage from './components/stage';

import Button from "./components/button";
import { useState } from 'react';

export default function MyApp() {
  
  

let obj=[
  {
    name: 'Hanu',
    salary: '30 lack',
    company: 'Badia'
  },
  {
    name: 'Abhay',
    salary: '50 lack',
    company: 'Hello'
  },{
    name: 'Chayank',
    salary: '45 lack',
    company: 'Nice'
  },
  {
    name: 'Sanyam',
    salary: '40 lack',
    company: 'Great'
  }


];

  const [objj,setobj]=useState(obj)
  return (
    <div className='container'>
     <div>
      <button onClick={()=>{
           
        setobj([...objj,{
          name: 'Sanyam',
          salary: '40 lack',
          company: 'Great'
        }]);
      }}>clear</button>
     </div>
    {
       objj.map((obj1) => (<Stage 
        key={obj1.id}
        name={obj1.name}
        salary={obj1.salary}
        company={obj1.company}>
        
        <Button naam={obj1.name}  smash={()=>console.log(obj1.name)}/>

        </Stage>
        
        
        
        ))}

        
{/* <div className="but">
              </div>  */}
    </div>
  );
}
// import Row from './components/Row';
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }
// function MyButton() {
  
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }
// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }
// function Fun1(){
//   return(
//     <>   
//      <h1>hello</h1>
//      <Strip></Strip>/
//     </>

//   );
// }