import React from "react";
import { Modal, Box, Rating, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};
const MyModal = ({
  handleClose,
  id,
  dataFull,
  open,
  handleChangeCheck,
  checked,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modalDiv">
            <div className="modalDivLeft">
              {dataFull.Poster !== "N/A" ? (
                <img
                  style={{
                    objectFit: "cover",
                    height: "90%",
                    Width: "100%",
                  }}
                  src={dataFull.Poster}
                  alt=""
                />
              ) : (
                <div
                  className="poster"
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    background: "grey",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  Picture not found.
                </div>
              )}
              <Checkbox
                onChange={handleChangeCheck}
                id={id}
                checked={checked}
                {...label}
                icon={<FavoriteBorder color={"primary"} />}
                checkedIcon={<Favorite />}
              />
            </div>
            <div className="modalDivRight">
              <span onClick={handleClose} className="CloseX">
                &times;
              </span>
              <Typography
                sx={{ maxWidth: "90%" }}
                id="modal-modal-title"
                variant="h5"
                component="h2"
              >
                {dataFull.Title}
              </Typography>
              <Typography component="legend">Rating by IMDB</Typography>
              <Rating
                name="disabled"
                value={Number(dataFull.imdbRating)}
                disabled
                precision={0.5}
                style={{ opacity: 1.0 }}
                fontSize="inherit"
                max={10}
              />
              <Typography
                variant="h6"
                id="modal-modal-description"
                sx={{ fontSize: "16px" }}
              >
                Released: {dataFull.Year}
              </Typography>
              <Typography
                variant="h6"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                Description:
              </Typography>
              <Typography id="modal-modal-description">
                {dataFull.Plot}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Actors: {dataFull.Actors}
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
