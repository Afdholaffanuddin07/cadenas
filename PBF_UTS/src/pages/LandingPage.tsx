import SignIn from "../components/SignIn";

const LandingPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#092230,_#1c6a96)] overflow-hidden flex flex-col items-center justify-start pt-[77px] px-5 pb-[172px] box-border gap-[20px] leading-[normal] tracking-[normal] text-left text-31xl text-linen font-poppins">
      <div className="w-[870px] flex flex-row items-start justify-center max-w-full">
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit mq650:text-11xl mq750:text-21xl" style={{ fontSize: '60px', color: 'white'  }}>
            Cadenas
          </h1>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-[66.5px] h-[70px] relative"
              loading="lazy"
              alt=""
              src="/LogoLandingPage.svg"
            />
          </div>
        </div>
      </div>
      <SignIn />
    </div>
  );
};

export default LandingPage;
