const SocialMediaIcons = ({whats = false}) => {
    return (
      <div className="flex justify-center items-center md:justify-start my-10 gap-7">
       
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/Ahmedelwaafy"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-profile" src="../assets/github.svg" />
        </a>

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.behance.net/ahmedelwaafy"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="behance-profile" src="../assets/behance.svg" />
        </a>

        
        {!whats &&
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ahmedelwaafy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-profile" src="../assets/linkedin.svg" />
      </a>
      
        }

    {whats &&
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ahmedelwaafy"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-profile" src="../assets/linkedin2.svg" />
      </a>
      
      }
        {whats &&
        
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://wa.me/+2001066031932"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="whatsapp-profile" src="../assets/whatsapp.svg" />
      </a>
        }
       
      </div>
    );
  };
  
  export default SocialMediaIcons;