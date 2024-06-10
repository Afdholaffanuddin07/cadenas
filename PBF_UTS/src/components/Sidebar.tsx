import { FunctionComponent } from "react";

export type SidebarType = {
  /** Action props */
  onDashboardContainerClick?: () => void;
  onManageUserContainerClick?: () => void;
  onLogContainerClick?: () => void;
  onMonitoringCameraContainerClick?: () => void;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  onDashboardContainerClick,
  onManageUserContainerClick,
  onLogContainerClick,
  onMonitoringCameraContainerClick,
}) => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-skyblue-200 [backdrop-filter:blur(4px)] w-[220px] h-[1024px] overflow-hidden text-left text-xs text-white font-poppins">
      <div
        className="absolute top-[297px] left-[15px] w-[191px] h-[50px] overflow-hidden cursor-pointer hover:w-[191px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
        onClick={onLogContainerClick}
      >
        <div className="absolute h-1/5 w-[66.49%] top-[40%] left-[21.47%] flex items-center">
          Log Activity
        </div>
        <img
          className="absolute h-[48%] w-[12.57%] top-[26%] right-[87.43%] bottom-[26%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/log.svg"
        />
      </div>
      <div
        className="absolute top-[353px] left-[15px] w-[191px] h-[50px] overflow-hidden cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
        onClick={onMonitoringCameraContainerClick}
      >
        <div className="absolute h-1/5 w-[66.49%] top-[40%] left-[21.47%] flex items-center">
          Monitoring Camera
        </div>
        <img
          className="absolute h-[48%] w-[12.57%] top-[26%] right-[87.43%] bottom-[26%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/monitor.svg"
        />
      </div>
      <div
        className="absolute top-[233px] left-[15px] w-[191px] h-[50px] overflow-hidden cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1]"
        onClick={onManageUserContainerClick}
      >
        <div className="absolute h-1/5 w-[66.49%] top-[40%] left-[21.47%] flex items-center">
          Manage User
        </div>
        <img
          className="absolute h-[48%] w-[12.57%] top-[26%] right-[87.43%] bottom-[26%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/iconparkoutlinedatauser.svg"
        />
      </div>
      <div className="absolute top-[204px] left-[15px] text-sm font-semibold flex items-center w-24 h-3.5">
        Shortcut
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[120px] left-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[200px] h-[61.9px]"
        onClick={onDashboardContainerClick}
      >
        <div className="absolute top-[61.5px] left-[-0.3px] box-border w-[200.7px] h-[0.7px] border-t-[0.7px] border-solid border-skyblue-100" />
        <div className="absolute top-[-0.3px] left-[-0.3px] box-border w-[200.7px] h-[0.7px] border-t-[0.7px] border-solid border-skyblue-100" />
        <div className="absolute top-[11px] left-[5px] w-40 h-10">
          <img
            className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
            alt=""
            src="/humbleiconsdashboard.svg"
          />
          <div className="absolute top-[10px] left-[48px] text-lg font-semibold font-poppins text-white text-center flex items-center justify-center w-28 h-5">
            Dashboard
          </div>
        </div>
      </button>
      <div className="absolute top-[13px] left-[10px] w-[196px] h-[84px] text-11xl">
        <div className="absolute top-[0px] left-[0px] w-[196px] h-[84px] overflow-hidden">
          <img
            className="absolute top-[20px] left-[147px] w-[45px] h-[45px] overflow-hidden"
            alt=""
            src="/iconparkoutlineelectronicdoorlock.svg"
          />
          <div className="absolute top-[0px] left-[3px] font-semibold flex items-center w-[174px] h-[84px]">
            Cadenas
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
