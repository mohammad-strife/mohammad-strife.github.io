import Footer from "@/components/Footer";
import Navbar from "@/components/menu/Navbar";
import useNetworkStatus from "@/hooks/useNetWorkStatus";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = () => {
  const { isOnline } = useNetworkStatus();
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
