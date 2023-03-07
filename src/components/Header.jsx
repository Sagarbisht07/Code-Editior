import React from "react";

import { AppBar, Toolbar, styled, Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Container = styled(AppBar)`
  background-color: rgb(6, 6, 6);
  height: 70px;
`;

const Header = () => {
  return (
    <Container
      position="static"
      style={{
        boxShadow: "0px 0px 0px 0px",
        borderBottom: "rgb(58, 58, 58) 0.7px solid",
        borderTop: "rgb(58, 58, 58) 0.7px solid",
      }}
    >
      <Toolbar>
        <img
          src="https://icon-library.com/images/image-editor-icon/image-editor-icon-20.jpg"
          alt=""
          width={"3%"}
        />
        <h1
          style={{
            color: "rgb(111, 143, 175)",
            marginLeft: "10px",
            fontFamily: "sans-serif",
          }}
        >
          Code Editor
        </h1>

        <div
          // write css for profile right side of header
          style={{
            position: "absolute",
            right: "15px",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/112841387?s=100&v=4"
            alt="user"
            style={{
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              border: "3px solid white",
              textAlign: "center",
              cursor: "pointer",
            }}
          />
        </div>
        {/* write a box for add fevrate code in code pan */}
        <Button
          variant="contained"
          color="success"
          style={{
            position: "absolute",
            fontFamily: "sans-serif",
            right: "260px",
            padding: "5px 10px",
            backgroundColor: "rgb(90, 95, 115)",
            color: "white",
            border: "2px solid white",
            cursor: "pointer",
            outline: "none",
          }}

          // onMouseOver={(e) => {
          //   e.target.style.backgroundColor = "rgb(111, 143, 175)";
          //   e.target.style.color = "white";
          // }}
          // onMouseOut={(e) => {
          //   e.target.style.backgroundColor = "rgb(90, 95, 115)";
          //   e.target.style.color = "white";
          // }}
        >
          <CloudIcon
            style={{
              color: "white",
              fontSize: "20px",
              marginRight: "5px",
              marginTop: "-3px",
            }}
          />
          Save
        </Button>

        <Button
          variant="contained"
          style={{
            position: "absolute",
            fontFamily: "sans-serif",
            right: "110px",
            padding: "5px 10px",
            backgroundColor: "rgb(90, 95, 115)",
            color: "white",
            border: "2px solid white",
            cursor: "pointer",
            outline: "none",
          }}
          // onMouseOver={(e) => {
          //   e.target.style.backgroundColor = "rgb(111, 143, 175)";
          //   e.target.style.color = "white";
          // }}
          // onMouseOut={(e) => {
          //   e.target.style.backgroundColor = "rgb(90, 95, 115)";
          //   e.target.style.color = "white";
          // }}
        >
          <SettingsIcon
            style={{
              color: "white",
              fontSize: "20px",
              marginRight: "5px",
              marginTop: "-3px",
            }}
          />
          Settings
        </Button>

        <Button
          variant="contained"
          color="success"
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: "370px",
            backgroundColor: "rgb(90, 95, 115)",
            color: "white",
            border: "2px solid white",
            cursor: "pointer",
            outline: "none",
          }}
          // onMouseOver={(e) => {
          //   e.target.style.backgroundColor = "rgb(111, 143, 175)";
          //   // e.target.style.color = "white";
          // }}
          // onMouseOut={(e) => {
          //   e.target.style.backgroundColor = "rgb(90, 95, 115)";
          //   // e.target.style.color = "white";
          // }}
        >
          <FavoriteIcon
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: "5px",
              marginTop: "3px",
            }}
          />
        </Button>
      </Toolbar>
    </Container>
  );
};

export default Header;
