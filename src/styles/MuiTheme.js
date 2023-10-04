import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    app_salad: "#52b69a",
    app_sky_blue: "#0466c8",
    app_blue: "#000831",
    app_blue_shade: "#000022",
    app_red: "#ef233c",
    app_white: "#fff",
    app_gray: "#333",
    app_gray_tint: "#999",
    app_black: "#111",
    app_black_05: "rgba(0,0,0,0.5)",
  },
  typography: {
    fontFamily: `"Poppins","Bebas Neue", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
