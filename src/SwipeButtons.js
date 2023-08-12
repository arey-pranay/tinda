import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="repeat">
        <ReplayIcon fontSize="medium" />
      </IconButton>
      <IconButton className="left">
        <CloseIcon fontSize="medium" />
      </IconButton>
      <IconButton className="star">
        <StarIcon fontSize="medium" />
      </IconButton>
      <IconButton className="right">
        <FavoriteIcon fontSize="medium" />
      </IconButton>
      <IconButton className="lightning">
        <FlashOnIcon fontSize="medium" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
