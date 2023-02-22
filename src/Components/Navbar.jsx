import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "./Utility-Components/Link";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar({isTopOfPage, selectedPage, setSelectedPage}) {
    const [isMenuToggled, setIsmenuToggled] = useState(false);
    
    const isDesktop =useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-light-blue";
  return (
    <nav className={`${navbarBackground}  w-full fixed top-0 py-6 z-40 `}>
      <div className="w-5/6 mx-auto flex justify-between items-center">
        {/* 1-logo */}
        <AnchorLink
          className="font-Poppins text-3xl font-bold "
          onClick={() => setSelectedPage("home")}
          href="#home"
        >
          AW
        </AnchorLink>

        {/* 2-DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-Inter font-semibold text-sm ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Technologies"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-pink p-2 "
            onClick={() => setIsmenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}

        {/* MOBILE MENU  */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-dark-grey w-[300px]">
            {/* Close Button */}
            <div className="flex justify-end p-12">
              <button
                className="rounded-full bg-pink p-2 "
                onClick={() => setIsmenuToggled(!isMenuToggled)}
              >
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl ">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Technologies"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar