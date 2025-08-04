import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-screen-lg mx-auto pt-8 z-10 relative text-black">
      <Logo />
      <svg
        className="w-8 h-8"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </div>
  );
}
