import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUserQuery } from "store/thunks/auth.thunk";
import { selectCurrentUser } from "store/selectors/authSelectors";

import {
  Button,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
} from "@mui/material";
import { Avatar } from "components/layouts";

export default function UserButton() {
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) return;
    setOpen(false);
  };

  function handleListKeyDown(e) {
    e.preventDefault();
    if (e.key === "Tab") setOpen(false);
    else if (e.key === "Escape") setOpen(false);
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);

  const onLogout = () => dispatch(logoutUserQuery());

  return (
    <div>
      <Button variant="text" onClick={handleToggle} ref={anchorRef}>
        <Avatar username={user.name} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown}
                  sx={{ width: "150px" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link
                      to={`/user/${user._id}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button
                      onClick={onLogout}
                      sx={{ padding: 0, width: "100%" }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
