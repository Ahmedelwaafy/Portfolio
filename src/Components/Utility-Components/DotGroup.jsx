import AnchorLink from "react-anchor-link-smooth-scroll";


const DotLink = ({page, selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
  before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`; 
  return (

  <AnchorLink 
  className= {` ${selectedPage === page ? selectedStyles : "bg-dark-grey "} w-3 h-3 rounded-full `}
  href={`#${page}`}
  onClick={ () => setSelectedPage(page)}
  />
  )
}


function DotGroup({selectedPage, setSelectedPage}) {
  
  
  return (
    <div className="fixed flex flex-col gap-6 right-7 top-[60%]">
      <DotLink
        page="home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page="skills"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      
      <DotLink
        page="projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page="technologies"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotLink
        page="contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default DotGroup