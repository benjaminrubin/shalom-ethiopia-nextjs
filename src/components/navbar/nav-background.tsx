"use client";
import useDisplayOnScroll from "../hooks/useDisplayOnScroll";
import { usePathname } from "next/navigation";

const NavBackground = () => {
  const [displayElement] = useDisplayOnScroll(120);
  const pathname = usePathname();
  const isBookingPage = pathname === "/request-booking";

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-[#479c53] h-[75px] w-100 z-[40] shadow-lg transition duration-600 `}
      style={{ opacity: displayElement || isBookingPage ? 1 : 0 }}
    ></div>
  );
};

export default NavBackground;
