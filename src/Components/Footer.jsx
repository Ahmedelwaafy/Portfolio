import SocialMediaIcons from "./Utility-Components/SocialMediaIcons";
import LineGradient from "./Utility-Components/LineGradient";



function Footer() {
  return (
    <footer className="h-68 bg-pink py-10 md:mt-32">
      <div className="w-10/12 mx-auto md:flex md:justify-between md:items-center gap-32">
        <h3 className=" text-center md:text-start font-Poppins font-semibold text-2xl text-simon">
          AHMED ELWAFY
        </h3>

        <SocialMediaIcons whats = {true}/>
      </div>
      <div className="flex justify-center">
      <LineGradient width= "w-10/12"/>
      </div>
      <p className="mt-7 font-Inter font-regular text-md text-simon text-center">
      ©2023 ELWAFY. All Rights Reserved.
    
      </p>




    </footer>
  )
}

export default Footer