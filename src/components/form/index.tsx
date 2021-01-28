import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Container,
  TextField,
  Button,
  Modal,
} from "@material-ui/core";
import { useStyle } from "./styles";
import { create } from "../../store/action";
import { useDispatch } from "react-redux";
import ImageList from "./imageList";

const Index = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Inputs>({
    creator: "",
    title: "",
    message: "",
    image: "",
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(create(inputs));
  };

  const imageHandler = (image: String) => {
    setInputs({ ...inputs, image: image });
  };

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined" className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={submitHandler}
        >
          <Typography className={classes.txt} variant="h6">
            Create Memory
          </Typography>

          <TextField
            className={classes.txtField}
            fullWidth
            color="secondary"
            label="creator"
            value={inputs.creator}
            onChange={(text) =>
              setInputs({ ...inputs, creator: text.target.value })
            }
          />

          <TextField
            className={classes.txtField}
            fullWidth
            color="secondary"
            label="title"
            value={inputs.title}
            onChange={(text) =>
              setInputs({ ...inputs, title: text.target.value })
            }
          />

          <TextField
            className={classes.txtField}
            fullWidth
            color="secondary"
            label="message"
            value={inputs.message}
            onChange={(text) =>
              setInputs({ ...inputs, message: text.target.value })
            }
          />

          <div className={classes.modalContainer}>
            <Button
              variant="contained"
              color="inherit"
              onClick={() => setOpenModal(true)}
            >
              <Typography variant="subtitle2" color="textPrimary">
                choose picture
              </Typography>
            </Button>
            <Modal
              className={classes.modalContainer}
              open={openModal}
              onClose={() => setOpenModal(false)}
            >
              <ImageList img={(e) => imageHandler(e)} />
            </Modal>
          </div>

          <Button color="secondary" type="submit">
            submit
          </Button>
          <Button color="secondary">clear</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Index;
