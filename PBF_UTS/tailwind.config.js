/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: "#555e6f",
        skyblue: {
          "100": "#71c7ec",
          "200": "rgba(113, 199, 236, 0.1)",
        },
        gray: {
          "100": "#092230",
          "200": "rgba(255, 255, 255, 0.01)",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        lightgray: "#c6cbd7",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "61xl": "80px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "11xl": "30px",
      lg: "18px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

// Landing Page

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         white: "#fff",
//         lightgray: "#d4d5d4",
//         linen: "#f2ebe3",
//       },
//       spacing: {},
//       fontFamily: {
//         poppins: "Poppins",
//       },
//       borderRadius: {
//         xl: "20px",
//       },
//     },
//     fontSize: {
//       base: "25px",
//       sm: "14px",
//       xl: "20px",
//       "31xl": "50px",
//       "11xl": "30px",
//       "21xl": "40px",
//       inherit: "inherit",
//     },
//     screens: {
//       mq750: {
//         raw: "screen and (max-width: 750px)",
//       },
//       mq675: {
//         raw: "screen and (max-width: 675px)",
//       },
//       mq450: {
//         raw: "screen and (max-width: 450px)",
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };
