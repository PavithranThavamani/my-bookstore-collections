import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          sx={{ marginTop: "50px", marginLeft: "30px", color: "blue" }}
          variant="h4"
        >
          {/* <pre>
            Welcome to Comic BookStore,
            <pre>Find your fanatsy Books, add your books,</pre>
            update them, not like it ? delete them.
          </pre> */}
        </Typography>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15 }}
          variant="contained"
        >
          <Typography variant="h4">View All Products</Typography>
        </Button>
        <Button
          LinkComponent={Link}
          to="/add"
          sx={{ marginTop: 5 }}
          variant="contained"
        >
          <Typography variant="h4">Add Products</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home;
