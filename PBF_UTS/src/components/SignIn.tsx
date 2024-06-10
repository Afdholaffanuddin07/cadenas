import React, { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignIn: FunctionComponent = () => {

  const navigate = useNavigate();
  const [admin, setAdmin] = useState("");
  const [passadmin, setPassadmin] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const Login = useCallback(async () => {
    let item = { admin, passadmin };
    try {
      let result = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!result.ok) {
        throw new Error('Login failed');
      }

      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      console.error('Error during login:', error);
      // alert('Login failed: ' + error.message);
    }
  }, [admin, passadmin, navigate]);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className="w-[870px] [backdrop-filter:blur(4px)] rounded-xl overflow-hidden flex flex-row items-end justify-center relative [row-gap:20px] max-w-full text-center text-31xl text-white font-poppins mq750:flex-wrap">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl [background:linear-gradient(255.07deg,_rgba(113,_199,_236,_0.3)_33.46%,_rgba(70,_102,_116,_0.3))]" />
      <img
        className="self-stretch flex-1 relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl max-w-full overflow-hidden max-h-full object-cover min-w-[309px] min-h-[680px] z-[1]"
        loading="lazy"
        alt=""
        src="/imgLandingPage.png"
      />
      <div className="w-[394px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[26px] pb-[76px] pr-[41px] pl-[18px] box-border gap-[122px] min-w-[394px] max-w-full z-[2] mq675:min-w-full mq450:gap-[61px] mq750:flex-1 mq750:pt-5 mq750:pb-[49px] mq750:box-border">
        <div className="w-[311px] flex flex-row items-start justify-end py-0 px-[34px] box-border">
          <h1
            className="m-0 flex-1 relative text-inherit font-semibold font-inherit"
            style={{ fontSize: "50px" }}>
            Sign In
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[110px] text-left text-xl mq450:gap-[55px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26.3px]">
            <h3 className="m-0 w-[183px] relative text-inherit font-semibold font-inherit flex items-center mq450:text-base">
              Email/Username
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
              <div className="relative [border:none] bg-[transparent] self-stretch flex flex-row items-start justify-between box-border min-w-[201px] gap-[20px]">
                <input
                  className="[outline:none] pt-0 px-0 pb-[9px] font-poppins font-semibold text-sm text-lightgray [border:none] w-full h-full [background:transparent] relative z-[3]"
                  placeholder="Username"
                  type="text"
                  value={admin}
                  onChange={(e) => setAdmin(e.target.value)}
                />
              </div>
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-lightgray" />
            </div>
            <h3 className="m-0 w-[183px] relative text-inherit font-semibold font-inherit flex items-center mq450:text-base">
              Password
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2px] relative">
              <div className="relative [border:none] bg-[transparent] self-stretch flex flex-row items-start justify-between box-border min-w-[201px] gap-[20px]">
                <input
                  className="[outline:none] pt-0 px-0 pb-[9px] font-poppins font-semibold text-sm text-lightgray [border:none] w-full h-full [background:transparent] relative z-[3]"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={passadmin}
                  onChange={(e) => setPassadmin(e.target.value)}
                />
                <div className="absolute right-0 top-0 bottom-0 flex items-center pr-2">
                  <img
                    src="/buttonLandingPage.svg"
                    alt="Show Password"
                    className="h-6 w-6 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                </div>
              </div>
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-lightgray" />
            </div>
            <button
              className="mt-4 w-full font-poppins text-lg hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] cursor-pointer"
              style={{
                display: "block",
                width: "190px",
                height: "65px",
                background: "linear-gradient(256.59deg,#71c7ec 7.87%, #092230 76.37%)",
                opacity: "1",
                color: "white",
                fontWeight: "bold",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "8px",
                marginLeft: "85px",
              }}
              onClick={Login}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;