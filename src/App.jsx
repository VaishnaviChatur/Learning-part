
import './App.css';
// import { useEffect, useState } from 'react';
// import Coloor from './Coloor';
import New from './New';

function App() {
//   const [colorr,setcolor ]=useState([
//     {
//       id:1,
//       color: 'red',
//     },
//     {id:2,
//       color: 'pink',
//     },
//     {id:3,
//       color: 'aqua',
//     },
    
//     {id:4,
//       color: 'grey',
//     },
//     {id:5,
//       color: 'green',
//     },
    
//   ])
//   const click = colorr =>{

//     setcolor(colorr)
//   }
//   useEffect(()=>{
//     {
//       colorr.map((item)=> {
//         return(
        
//           //  colorr=
//     document.body.style.backgroundColor=item.color
         
//     )
//   })
// }
//   },[colorr])
  return (
    <div className="App">
  {/* <Coloor/> */}
  <New/>
    </div>
  );
}

export default App;
