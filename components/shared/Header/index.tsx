
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import "@/components/shared/Header/header.css"; 
import  Menu  from "@/components/shared/Header/Menu";

const Header = () => {
    return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-left">
            <Link href="/" className="logo-link">
            <Image src='/fruit.png' alt={`${APP_NAME} logo`} height={48} width={48} priority={true } />
            </Link>
            <span className="app-name">{APP_NAME}</span>
          </div>
          <div>
          <Menu />

          </div>

        </div>
      </header>
    );
  };
  
 
export default Header;