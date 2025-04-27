import { APP_NAME } from "@/lib/constants";
import "@/components/Footer/footer.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        {currentYear} {APP_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
