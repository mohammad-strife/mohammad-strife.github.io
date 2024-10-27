import Footer from "@/components/Footer";
import Navbar from "@/components/menu/Navbar";
import useNetworkStatus from "@/hooks/useNetWorkStatus";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const { isOnline } = useNetworkStatus();
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
