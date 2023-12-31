"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "./mobile-menu";
import { CSSTransition } from "react-transition-group";
import styles from "./mobile-menu-icon.module.css";
import { usePathname } from "next/navigation";

const MobileMenuIcon = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState<boolean>(false);
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const pathname = usePathname();
  const nodeRef = useRef(null);

  const hideMobileMenu = () => setDisplayMobileMenu(false);

  useEffect(() => {
    // If the previous path is set and it's not equal to the pathname
    if (previousPath && previousPath !== pathname) {
      // hide the mobilem enu
      hideMobileMenu();
    }

    setPreviousPath(pathname);

    // Define a function to handle the resize event
    const handleResize = () => {
      if (window.innerWidth > 768 && displayMobileMenu) {
        setDisplayMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [displayMobileMenu, pathname, previousPath]); // Dependency array to ensure the effect runs again if isDivVisible changes

  return (
    <>
      <div
        onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
        className='text-white font-bold md:hidden cursor-pointer mr-5 h-min w-min z-50'
      >
        {displayMobileMenu ? (
          <IconX stroke={2} size={36} />
        ) : (
          <IconMenu2 stroke={2} size={36} />
        )}
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={displayMobileMenu}
        timeout={300}
        classNames={{
          enter: styles["fade-enter"],
          enterActive: styles["fade-enter-active"],
          exit: styles["fade-exit"],
          exitActive: styles["fade-exit-active"],
        }}
        unmountOnExit
        mountOnEnter
      >
        <MobileMenu hideMobileMenu={hideMobileMenu} innerRef={nodeRef} />
      </CSSTransition>
    </>
  );
};

export default MobileMenuIcon;
