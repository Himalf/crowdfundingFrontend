import Footer from "../components/shared-components/navigation/Footer";
import Navbar from "../components/shared-components/navigation/Navbar";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
