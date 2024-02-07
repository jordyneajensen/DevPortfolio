// Import necessary types from Next.js
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the interface for the link prop
interface NavLinkProps {
  link: {
    url: string;
    title: string;
  };
}

// Define the NavLink component
const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  // Use the usePathname hook to get the current pathname
  const pathName = usePathname();

  // Return the Link component with dynamic styling based on the current pathname
  return (
    <Link href={link.url}>
      <a className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}>
        {link.title}
      </a>
    </Link>
  );
};

export default NavLink;
