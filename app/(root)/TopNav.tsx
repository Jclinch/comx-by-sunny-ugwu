import Image from "next/image";
import Link from "next/link";
import "@/components/styles/topNav.scss";

interface User {
  name: string;
  // avatarUrl: string;
}

interface TopNavProps {
  user: User;
}

const TopNav: React.FC<TopNavProps> = ({ user }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-50 shadow-md">
      {/* Left side - Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/Logo.png"
          width={50}
          height={40}
          alt="Logo"
          className="cursor-pointer"
        />
        <h1 className="text-xl font-semibold text-green-900">Next Cash</h1>
      </Link>

      {/* Middle - Search bar */}
      <div className="search-bar">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search for anything"
            className="input"
          />
          <button className="search-button">
            <Image
              src="/icons/search-icon.png"
              alt="Search Icon"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      {/* Right side - Links and Icons */}
      <div className="flex items-center gap-6">
        <Link
          href="https://docs.google.com/document/d/121Npoqs_xsoRVTg55a25eafKbHrGGyI5nbMuswcmp90/edit?usp=sharing"
          className="text-gray-600 hover:underline"
        >
          Docs
        </Link>

        {/* Notification icon */}
        <button className="relative">
          <Image
            src="/icons/bell.png"
            alt="Notifications"
            width={20}
            height={20}
          />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User Avatar and Name */}
        <div className="avatar flex items-center gap-2 cursor-pointer">
          <Image
            src="/avatars/user-img.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-gray-800 font-medium">{user.name}</span>
          <Image
            src="/icons/arrow-down.png"
            alt="Dropdown Icon"
            width={12}
            height={12}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
