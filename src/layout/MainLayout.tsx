import Footer from "../components/shared-components/navigation/Footer";
import Navbar from "../components/shared-components/navigation/Navbar";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
