import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {

  const [selectedpage, setSelectedPage] =useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isDesktop = useMediaQuery("(min-width: 1060px)");
  
  useEffect(()=> {
      const handleScroll =() =>{
        if (window.scrollY ===0) {
        setIsTopOfPage(true);
       } else 
      { setIsTopOfPage(false); } }

      window.addEventListener("scroll", handleScroll);

      return window.removeEventListener("scroll", handleScroll);

  }, [])

  return (

    <div className="app">

    <Navbar
        isTopOfPage = {isTopOfPage} 
        selectedpage = {selectedpage} 
        setSelectedPage = {setSelectedPage} 
     />   
 
 </div>
  );
}

export default App;
