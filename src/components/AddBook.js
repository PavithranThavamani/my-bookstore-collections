import React, { useState } from "react";
import {
  Box,
  FormLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const history = useNavigate();

  const [input, setInput] = useState({
    name: "",
    description: "",
    author: "",
    price: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const changeHandler = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input, checked);
    sendRequest().then(() => history("/books"));
  };

  const sendRequest = async () => {
    await axios
      .post("https://my-bookstore-collections.herokuapp.com//books", {
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
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button
          // sx={{ marginTop: "30" }}
          className="add-book"
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: "#00695c" }}
        >
          Add Book
        </Button>
      </Box>
    </form>
  );
}

export default AddBook;
