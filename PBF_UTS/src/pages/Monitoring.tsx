import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";

const Monitoring = () => {
  const navigate = useNavigate();

  const onDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onManageUserContainerClick = useCallback(() => {
    navigate("/manage-user");
  }, [navigate]);

  const onLogContainerClick = useCallback(() => {
    navigate("/log-activity");
  }, [navigate]);

  const cameraIp = "http://your-esp32-cam-ip-address"; // Replace with your ESP32-CAM IP address

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#092230,_#1c6a96)] h-[1024px] overflow-hidden text-left text-sm text-white font-poppins">
      <Navbar1 />
      <Sidebar
        onDashboardContainerClick={onDashboardContainerClick}
        onManageUserContainerClick={onManageUserContainerClick}
        onLogContainerClick={onLogContainerClick}
      />
      <div className="flex justify-center items-center h-full">
        <iframe
          src={cameraIp}
          className="w-[640px] h-[480px] border-none"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
};

export default Monitoring;
