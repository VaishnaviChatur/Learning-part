
import React, {useEffect, useState} from 'react';
export default function Data() {

const [data, getData] = useState([
  {
    id:1,
    state: 'maharashtra',
  },
  {id:2,
    state: 'Gujrat',
  },
  {id:3,
    state: 'Bihar',
  },
  
  {id:4,
    state: 'kerla',
  },
  {id:5,
    state: 'karnataka',
  },
  {id:6,
    state: 'madhyapradesh',
  },
  {id:7,
    state: 'manipur',
  },
  {id:8,
    state: 'odisa',
  },
  {id:9,
    state: 'telangana',
  },
  {id:10,
    state: 'andrapradesh',
  },
])
// const [nameList,setnameList] = useState([])
const [search, setSearch] = useState("");
// useEffect(()=>{
//     // ((response)=>{setnameList(response.data.results)})
// })
  return (
    <div>
      <h1>Search data</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      
    <input type='search' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
    {/* <button>Add</button> */}
    {data.filter((item)=>{
        if(search===""){
            return item
        }else if(item.state.toLowerCase().includes(search.toLowerCase())){
            return item
        }
    
    }).map((item)=> {
      return (
       <h4>{item.state}</h4>)
      }
    )
     
    }
    
    </div>
  );
}