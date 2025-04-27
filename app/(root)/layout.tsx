import Header from "@/components/shared/Header";
import Footer from "@/components/Footer";
export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <div className="container">
            <Header/>
           <main className="main-content">
                <div className="wrapper">
                     {children}
                </div>
            </main> 
            <Footer/>
        </div> 
   
    );
    }
  