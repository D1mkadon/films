import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const MySelect = ({ type, handleChangeType }) => {
  return (
    <FormControl color="primary" sx={{ minWidth: 90, m: 1 }}>
      <InputLabel
        sx={{
          top: "-5px",
          "&.Mui-focused": {
            top: 0,
            color: "#fff",
          },
        }}
        color="primary"
        id="demo-simple-select-autowidth-label"
      >
        Type
      </InputLabel>
      <Select
        color="primary"
        sx={{
          height: "2.5rem",
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4caf50",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline ": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "#4caf50",
          },
        }}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={type}
        onChange={handleChangeType}
        label="Type"
        autoWidth
      >
        <MenuItem value="">
          <em>all</em>
        </MenuItem>
        <MenuItem value={"movie"}>movie</MenuItem>
        <MenuItem value={"series"}>series</MenuItem>
        <MenuItem value={"episode"}>episode</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelect;
