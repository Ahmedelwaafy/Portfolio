import { useEffect, useState } from "react";


function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(()=> {
        const media =window.matchMedia(query);

        if(media.matches !== matches) {
            setMatches(media.matches);
        }
        
        const listener = ()=> setMatches(media.matches);
        window.addEventListener("resize", listener);
        
        return ()=>  window.removeEventListener("resize", listener);

    }, [query, matches])
   
    
  return matches;
}

export default useMediaQuery