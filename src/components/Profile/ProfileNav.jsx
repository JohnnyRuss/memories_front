/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import {
  selectProfileInfo,
  selectCurrentUser,
} from "store/selectors/authSelectors";

import { Box, Tabs, Tab } from "@mui/material";

export default function ProfileNav() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const profileInfo = useSelector(selectProfileInfo);
  const currentUser = useSelector(selectCurrentUser);

  const username = profileInfo.name.split(" ")[0];
  const tabName = userId === currentUser._id ? "Your" : `${username}'s`;

  const targets = [
    { label: `${tabName} Memories`, path: "memories" },
    { label: `${tabName} Liked Memories`, path: "liked-memories" },
  ];

  const [activeTarget, setActiveTarget] = useState(0);

  const handleChange = (_, tabIndex) => {
    setActiveTarget(tabIndex);
    navigate(`/user/${userId}/${targets[tabIndex].path}`);
  };

  useEffect(() => {
    if (!location.pathname) return;

    const currentTargetIndex = targets.findIndex((target) =>
      location.pathname.split("/").includes(target.path)
    );

    if (currentTargetIndex < 0) navigate(targets[0].path);
    else setActiveTarget(currentTargetIndex);
  }, [location.pathname]);

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={activeTarget} onChange={handleChange}>
        {targets.map((target) => (
          <Tab
            key={target.label}
            label={target.label}
            sx={{ textTransform: "capitalize" }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
