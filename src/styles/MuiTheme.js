import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    app_ballet: "#606c38",
    app_salad: "#52b69a",
    app_blue: "#0466c8",
    app_blue_shade: "#045cb4",
    app_red: "#ef233c",
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
