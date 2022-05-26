import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
      <Box display={"flex"} flexDirection="column" alignItems={"center"}>
        <Typography sx={{ fontFamily: "cursive" }} variant="h3">
          This is the Book store where you can add the book, update the book,
          delete the book for your convenience
        </Typography>
        <Typography marginTop={10} sx={{ fontFamily: "cursive" }} variant="h4">
          This was fully developed using MERN stack.
        </Typography>
      </Box>
    </div>
  );
}

export default About;
