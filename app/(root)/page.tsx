import { Metadata } from "next";
import "@/assets/styles/home-page.css";

export const metadata: Metadata = {
  title: 'Home',
};
const delay =(ms:number)=> new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async() => {
 await delay(1000);
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page with some CSS styles.</p>
    </div>
  );
}

export default HomePage;
