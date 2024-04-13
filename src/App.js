/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { DaImg,BackupImg,RestoreImg } from "./assets";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function App() {
  const [screenSize, setScreensize] = React.useState(window.innerWidth);
  const [open, setOpen] = React.useState(false);
  const setDimension = () => {
    setScreensize(window.innerWidth);
  };
  React.useEffect(() => {
    if(screenSize < 1050){
      setOpen(false)
    }
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  let navigate = useNavigate();
  const ButtonStyle = {
    textTransform: "none",
    margin: "0px 15px",
    borderRadius: "6px",
    color: "rgb(94, 53, 177)",
    border: "1px solid rgb(94, 53, 177)",
    fontWeight: 500,
    "&:hover": {
      color: "rgb(94, 53, 177)",
      background: "rgb(237, 231, 246)",
    },
  };
  const ButtonIconStyle = {
    marginLeft: "4%",
    borderRadius: "6px",
    color: "rgb(94, 53, 177)",
    "&:hover": {
      color: "rgb(94, 53, 177)",
      background: "rgb(237, 231, 246)",
    },
  };
  return (
    <>
      <div
        onMouseMove={(e) => {
          setX((window.innerHeight / 2 - e.clientY) / 30);
          setY(-(window.innerWidth / 2 - e.clientX) / 30);
        }}
      >
        <div
          style={{
            // position: "fixed",
            background: "white",
            boxShadow: "4px 16px 44px rgb(3 23 111 / 20%)",
            height: screenSize < 1050 ? "fit-content" : "80px",
            borderRadius: "10px",
            width: "96%",
            marginLeft: "2%",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
              {screenSize < 1050 ? (
          <div style={{ flex: "5%" }}>
            <IconButton
              sx={ButtonIconStyle}
              onClick={() => {
                setOpen(true);
              }}
            >
              <MenuIcon  />
            </IconButton>
          </div>
        ) : null}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "2%",
              padding:"10px"
            }}
          >
            <img src={DaImg} alt="Notepad" style={{}} />
            <Typography style={{ fontWeight: "600", fontSize: "20px" }}>
              Notepad
            </Typography>
          </div>
         {screenSize >= 1050 ? <div
            style={{
              display: screenSize < 1050 ? "grid" : "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              margin: screenSize < 1050 ? "40px" : "",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <a
                href="/termsandprivacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ...ButtonStyle, border: "none" }}
                  variant="standard"
                >
                  Terms of Service
                </Button>
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="/termsandprivacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ...ButtonStyle, border: "none" }}
                  variant="standard"
                >
                  Privacy Policy
                </Button>
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=santoorvlss4321@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ...ButtonStyle, border: "none" }}
                  variant="standard"
                >
                  Help
                </Button>
              </a>
            </div>
            <Button
              sx={{
                ...ButtonStyle,
                border:
                  screenSize < 1050 ? "none" : "1px solid rgb(94, 53, 177)",
              }}
              variant="standard"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                ...ButtonStyle,
                border:
                  screenSize < 1050 ? "none" : "1px solid rgb(94, 53, 177)",
              }}
              variant="standard"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </div> : null}
        </div>
       
        <div style={{ padding: "30px",paddingTop:'8%' }}>
  <Typography variant="h4" style={{ marginBottom: "20px", textAlign: "center" }}>
    Seamlessly Integrate Your To-Do List with Google Docs
  </Typography>
  <Typography variant="body1" style={{ marginBottom: "40px" }}>
    Welcome to Notepad you can store your quick quotes, daily tasks online securely, not only that but also where you can enhance your productivity by integrating your to-do list with Google Docs. With our app, you can securely backup and restore your important documents, ensuring data integrity and protection against potential loss.
  </Typography>

  {/* Features Section */}
  <div style={{ display: "flex", flexDirection: screenSize < 600 ? "column" : "row", justifyContent: "space-between" }}>
    <div style={{ flex: 1, marginBottom: screenSize < 600 ? "40px" : "0", marginRight: screenSize >= 1050 ? "40px" : "0" }}>
      <img src={BackupImg} alt="Backup Functionality" style={{ width: "100%", marginBottom: "20px", borderRadius: "10px" }} />
      <Typography variant="h5" style={{ marginBottom: "10px", textAlign: "center" }}>Backup Functionality</Typography>
      <Typography variant="body2">
        With user consent, our app securely accesses specific Google Docs using the Google access token. This allows us to create backups in a separate, secure location, ensuring data integrity and protection against potential loss.
      </Typography>
    </div>
    {(
      <div style={{ flex: 1 }}>
        <img src={RestoreImg} alt="Restore Functionality" style={{ width: "100%", marginBottom: "20px", borderRadius: "10px" }} />
        <Typography variant="h5" style={{ marginBottom: "10px", textAlign: "center" }}>Restore Functionality</Typography>
        <Typography variant="body2">
          Users can restore their data from Google Docs into the to-do list app using the Google access token. The restored data will populate the user's to-do list and won't be retained after restoration.
        </Typography>
      </div>
    )}
  </div>
</div>


       
          </div>
         {screenSize < 1050 ? <SwipeableDrawer
          anchor={"left"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          // onClose={toggleDrawer(anchor, false)}
          // onOpen={toggleDrawer(anchor, true)}
        >
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            style={{ marginLeft: "auto" }}
            sx={{
              ...ButtonIconStyle,
              margin: "10px",
              width: "40px",
              color: "black",
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Divider />
          <Button
              sx={{
                ...ButtonStyle,
                border:
                  screenSize < 1050 ? "none" : "1px solid rgb(94, 53, 177)",
              }}
              variant="standard"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                ...ButtonStyle,
                border:
                  screenSize < 1050 ? "none" : "1px solid rgb(94, 53, 177)",
              }}
              variant="standard"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          <div style={{ textAlign: "center" }}>
              <a
                href="/termsandprivacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ...ButtonStyle, border: "none" }}
                  variant="standard"
                >
                  Terms of Service
                </Button>
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="/termsandprivacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ...ButtonStyle, border: "none" }}
                  variant="standard"
                >
                  Privacy Policy
                </Button>
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=santoorvlss4321@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ ...ButtonStyle, border: "none" }}
                  variant="standard"
                >
                  Help
                </Button>
              </a>
            </div>
         



        </SwipeableDrawer> : null}
    </>
  );
}

export default App;
