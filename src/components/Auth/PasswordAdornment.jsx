import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordAdornment({
  setShowPasswordAs,
  showPasswordAs,
}) {
  return (
    <InputAdornment position="end">
      <IconButton
        onClick={() =>
          setShowPasswordAs((prev) =>
            prev === "password" ? "text" : "password"
          )
        }
      >
        {showPasswordAs === "password" ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
}
