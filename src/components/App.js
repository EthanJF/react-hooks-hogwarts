import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import FilterHogs from './FilterHogs'
import SortHogs from './SortHogs'
import HogContainer from "./HogContainer"

import hogs from "../porkers_data";

const App = () => {

  const [theseHogs, setTheseHogs ] = useState(hogs)
  const [isGreased, setIsGreased] = useState(false)
  const [sort, setSort ] = useState("none")

  const changeGreased = () => {
      setIsGreased(!isGreased)
  }

  const changeSort = (newSort) => {
    setSort(newSort)
  }

  useEffect(() => {
    sortHogs()
  }, [sort])
  
  const sortHogs = () => {
      let sortedHogs = [...theseHogs]
      if(sort === "name"){
        sortedHogs.sort((a, b) => (a.name > b.name ) ? 1 : -1)
      } else if (sort == "weight"){
        sortedHogs.sort((a, b) => (a.weight > b.weight ) ? 1 : -1)
      } else {
        sortedHogs = [...hogs]
      }
      setTheseHogs(sortedHogs)
  }

  const greasedHogs = [...theseHogs].filter(eachHog => eachHog.greased == true)


  return (
    <div className="App">
      <Nav />
      <FilterHogs isGreased={isGreased} changeGreased={changeGreased}/>
      <SortHogs sort={sort} changeSort={changeSort}/>
      <br/>
      <br/>
      <br/>
      <HogContainer hogs={isGreased? greasedHogs: theseHogs} />
    </div>
  );
}

export default App;
