import AnchorLink from "react-anchor-link-smooth-scroll";

function Link({page, selectedPage, setSelectedPage }) {
    const lowerCasePage = page.toLowerCase(); 
    const textColor = selectedPage === lowerCasePage? "text-yellow" : "";
    
    return (

    <AnchorLink 
    className= {` ${textColor} hover:text-yellow transition duration-500`}
    href={`${lowerCasePage}`}
    onClick={ () => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link