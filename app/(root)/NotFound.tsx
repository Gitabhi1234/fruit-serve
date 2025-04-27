'use client';
import { Button } from "@chakra-ui/react";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import "../assets/styles/NotFound.css";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter(); 
    return (
        <div className="container">
        <Image src="/images/logo.png" alt={`${APP_NAME} logo`} height={100} width={100} priority={true} className="logo" />
        <div className="content">
          <h1 className="title">Page Not Found!</h1>
          <p className="description">Could not find requested page.</p>
          <Button className="home-button" onClick={() =>router.push("/")}>
            Back to the home page
          </Button>
        </div>
      </div>      
    );
}

export default NotFoundPage;