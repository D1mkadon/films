import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.scss";
import MyModal from "./MyModal";
import Container from "@mui/material/Container";
import SearchComponent from "./Search";
import "./ShowFavorite.scss";
import { CSSTransition } from "react-transition-group";

import {
  CardContent,
  Alert,
  AlertTitle,
  CardMedia,
  Typography,
  CardActionArea,
  Card,
  Button,
  TextField,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from "@mui/material";

const API_KEY = "85a17fbd";

const HomePage = () => {
  const [filmName, setFilmName] = useState("Avengers");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const [dataFull, setDataFull] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateFull, setUpdateFull] = useState(false);
  const [updateFav, setUpdateFav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorYearMsg, setYearErrorMsg] = useState(false);
  const [errorSearchMsg, setErrorSearchMsg] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(4);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [yearInputValue, setYearInputValue] = useState("");
  const [imdbID, setimdbID] = useState(null);
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [favoriteInfo, setFavoriteInfo] = useState([]);
  const [showFavorite, setShowFavorite] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChangeCheck = () => {
    checked ? removeFavorite() : handleAddFavorite();
  };
  const removeFavorite = () => {
    setFavorite(favorite.filter((p) => p !== imdbID));
    setChecked(false);
  };
  const handleAddFavorite = () => {
    setFavorite([...favorite, imdbID]);
    setChecked(true);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (inputValue) {
      setFilmName(inputValue.toLowerCase());

      if (yearInputValue) {
        if (yearInputValue > 1980) {
          setYear(yearInputValue);
          setUpdate(!update);
          setYearErrorMsg(false);

          setPage(1);
        } else {
          setYearErrorMsg(true);
        }
      } else {
        setYear("");
        setPage(1);
        setUpdate(!update);
      }
    } else {
      setErrorSearchMsg(true);
    }
  };
  useEffect(() => {
    if (imdbID) {
      axios
        .get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`)
        .then((ta) => {
          if (ta.status === 200) {
            setDataFull(ta.data);
          }
          setChecked(false);
          for (let i = 0; i < favorite.length; i++) {
            if (imdbID === favorite[i]) {
              setChecked(true);
            }
          }
        });
    } else console.log("else");
  }, [updateFull]);

  useEffect(() => {
    for (let i = 0; i < favorite.length; i++) {
      axios
        .get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${favorite[i]}`)
        .then((ta) => {
          if (ta.status === 200) {
            console.log(ta.data);

            setFavoriteInfo([...favoriteInfo, ta.data]);

            console.log(favoriteInfo);
          }
        });
    }
  }, [updateFav]);

  useEffect(() => {
    const wrongSearch = [
      {
        imdbID: Date.now(),
        Poster: "",
        Title: "not found",
        Type: "",
        Year: "",
      },
    ];

    axios
      .get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}&t=${filmName}&page=${page}&type=${type}&y=${year}`
      )
      .then((data) => {
        if (data.status === 200) {
          if (data.data.Response === "True") {
            setData(data.data.Search);
            setMaxPage(Math.floor(Number(data.data.totalResults) / 10) + 1);
            setLoading(false);
          } else setData(wrongSearch);
          setErrorMsg(data.data.Error);
        } else throw "bad request";
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Something went wrong");
        setLoading(false);
      });
  }, [update, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleYearInputChange = (e) => {
    setYearInputValue(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const clickFunction = (e, name) => {
    setUpdateFull(!updateFull);
    setimdbID(name);
    setTimeout(() => handleOpen(), 250);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorSearchMsg(false);
    setYearErrorMsg(false);
  };
  const handleShowFavorite = () => {
    setShowFavorite(true);
    setUpdateFav(!updateFav);
  };
  const handleHideFavorite = () => {
    setShowFavorite(false);
  };

  return (
    <div className="wrapper">
      <header className={"header"}>
        <form className={"forme"} onSubmit={handleSubmitForm}>
          <div className={"mySearch"}>
            <SearchComponent
              color="primary"
              inputValue={inputValue}
              handleInputChange={handleInputChange}
            />
          </div>

          <FormControl color="primary" sx={{ m: 1 }}>
            <InputLabel color="primary" id="demo-simple-select-autowidth-label">
              Type
            </InputLabel>
            <Select
              color="primary"
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
          <TextField
            color="primary"
            id="outlined-basic"
            label="Year"
            variant="outlined"
            sx={{ width: "10%" }}
            value={yearInputValue}
            onChange={handleYearInputChange}
          />
          <Snackbar
            open={errorSearchMsg}
            autoHideDuration={2000}
            onClose={handleCloseAlert}
          >
            <Alert
              sx={{
                position: "fixed",
                bottom: "15px",
                left: "15px",
                textAlign: "left",
                width: "20%",
              }}
              variant="filled"
              severity="error"
            >
              <AlertTitle>Error</AlertTitle>
              Search cannot be empty
            </Alert>
          </Snackbar>
          <Snackbar
            open={errorYearMsg}
            autoHideDuration={2000}
            onClose={handleCloseAlert}
          >
            <Alert
              sx={{
                position: "fixed",
                bottom: "15px",
                left: "15px",
                textAlign: "left",
                width: "20%",
              }}
              variant="filled"
              severity="warning"
            >
              <AlertTitle>Warning</AlertTitle>
              Year should be empty or more than 1980
            </Alert>
          </Snackbar>

          <Button
            color="primary"
            type="submit"
            variant="outlined"
            size="medium"
          >
            Search
          </Button>
          <Button
            onClick={handleShowFavorite}
            sx={{ marginLeft: 10 }}
            variant="outlined"
          >
            Saved
          </Button>
        </form>
      </header>

      {showFavorite ? (
        <div className="favoriteDiv">
          <span onClick={handleHideFavorite} className="xButton">
            &times;
          </span>
          {favoriteInfo.map((e, id) => {
            return <div key={id}>{e.Title}</div>;
          })}
        </div>
      ) : null}

      <div className={"pageDiv"}>
        <div className={"pagination"}>
          <Pagination
            color={"secondary"}
            count={maxPage}
            defaultPage={1}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <Container>
        <TextField
          color="primary"
          id="outlined-basic"
          label="Year"
          variant="outlined"
          sx={{ width: "10%" }}
          value={yearInputValue}
          onChange={handleYearInputChange}
        />
        <MyModal
          handleChangeCheck={handleChangeCheck}
          dataFull={dataFull}
          handleClose={handleClose}
          open={open}
          id={imdbID}
          checked={checked}
        />
        <div className="block">
          {errorMsg ? (
            <Alert className="errorMSG" severity="error">
              {errorMsg}
            </Alert>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            data.map((element) => {
              return (
                <div
                  style={{ maxWidth: "400px" }}
                  key={element.imdbID}
                  className={"postBlock"}
                >
                  <Card sx={{ width: "100%", flexDirection: "column" }}>
                    <CardActionArea
                      propskey={element.imdbID}
                      onClick={(e) => clickFunction(e, `${element.imdbID}`)}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        minHeight: 500,
                        height: 600,
                      }}
                    >
                      {element.Poster !== "N/A" ? (
                        <CardMedia
                          className="poster"
                          component="img"
                          image={element.Poster}
                          height="590"
                          sx={{ width: "100%" }}
                        />
                      ) : (
                        <div
                          className="poster"
                          style={{
                            width: "100%",

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

                      <CardContent>
                        <Typography
                          sx={{ fontSize: 20, height: 50 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {element.Title}
                        </Typography>
                        <Typography variant="body2" color="text.disabled">
                          {element.Type} {element.Year}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
