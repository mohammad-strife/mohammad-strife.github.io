import Footer from "@/components/Footer";
import Navbar from "@/components/menu/Navbar";
import useNetworkStatus from "@/hooks/useNetWorkStatus";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ConnectionModal from "@/components/ConnectionModal";

const MainLayout = () => {
  const { isOnline } = useNetworkStatus();
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </>
    // <>
    //   {isOnline ? (
    //     <>
    //       <Navbar />
    //       <Toaster />
    //       <Outlet />
    //       <Footer />
    //     </>
    //   ) : (
    //     <ConnectionModal />
    //   )}
    // </>
  );
};

export default MainLayout;
