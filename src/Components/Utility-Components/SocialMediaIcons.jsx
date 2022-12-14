const SocialMediaIcons = () => {
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

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/ahmedelwaafy"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-profile" src="../assets/linkedin.svg" />
        </a>
       
      </div>
    );
  };
  
  export default SocialMediaIcons;