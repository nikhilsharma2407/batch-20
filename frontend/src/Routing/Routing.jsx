import React from 'react'
import {useParams,useSearchParams,useNavigate} from "react-router-dom";


function Routing() {
  const params = useParams();

  const [searchQuery,setSearchQuery] =  searchQuery();
  console.log(params);
  console.log(searchQuery);



  return (
    <>
      <h1>params  - {JSON.stringify(params)} </h1>
      <h1>QueryParams  - {searchQuery.get('search')} </h1>

      <input onChange={e=>setSearchQuery({'search':e.target.value})}></input>
    </>
  )
}

export default Routing