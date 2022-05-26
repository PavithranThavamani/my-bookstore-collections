import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const [input, setInput] = useState({});
  const [checked, setChecked] = useState(false);

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://my-bookstore-collections.herokuapp.com/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.book));
    };
    fetchHandler();
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

  const changeHandler = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .put(`https://my-bookstore-collections.herokuapp.com/${id}`, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      {input && (
        <form onSubmit={submitHandler}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft="auto"
            paddingLeft={5}
            marginRight="auto"
            paddingRight={5}
            marginTop={5}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
              value={input.name}
              onChange={changeHandler}
            />
            <FormLabel>Author</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
              value={input.author}
              onChange={changeHandler}
            />
            <FormLabel>Description</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
              value={input.description}
              onChange={changeHandler}
            />
            <FormLabel>Price</FormLabel>
            <TextField
              type={"number"}
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
              value={input.price}
              onChange={changeHandler}
            />
            <FormLabel>Image</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
              value={input.image}
              onChange={changeHandler}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />
            <Button
              // sx={{ marginTop: "30" }}
              // className="add-book"
              type="submit"
              variant="contained"
              // sx={{ backgroundColor: "#00695c" }}
            >
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}

export default Details;
