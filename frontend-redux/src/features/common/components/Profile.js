import React, {useState} from "react";
import { Box, Button, CardContent, Typography } from "@material-ui/core";
import mickey from "../imgs/mickey.png";
import { Icon } from "@iconify/react";

export default function Profile(props) {


  // axios.post("api/uploadfile", formData)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });


  return (
    <>
      <Box
        sx={{
          bgcolor: "#ffff",
          height: "26vh",
          width: "25vh",
        }}
        style={{ minWidth: "200px", minHeight: "230px" }}
      >
        <CardContent>
          <Box
            sx={{
              margin: "10px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={mickey} height="100px" width="100px" />
            <Box sx={{ bgcolor: "#ffff", height: "3vh" }} />
            <div>김트립</div>
            <div>tripkim@gmail.com</div>
          </Box>
        </CardContent>
      </Box>
    </>
  );
}
