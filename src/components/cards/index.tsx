import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Modal,
} from "@material-ui/core";
import { CancelOutlined, Edit, Check } from "@material-ui/icons";
import { useStyle } from "./style";
import { useDispatch } from "react-redux";
import { deletePost, update } from "../../store/action/action";
import ImageList from "../form/imageList";

const Index = (props: InputState) => {
  const classes = useStyle();
  const { creator, message, title, image, id } = props;
  const [edit, setEdit] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [inputs, setInputs] = useState<InputState>({
    creator: creator,
    title: title,
    message: message,
    image: image,
    id: id,
  });
  const dispatch = useDispatch();

  const imageHandler = (image: string) => {
    setInputs({ ...inputs, image: image });
  };

  return (
    <Card className={classes.root}>
      {edit ? (
        <div className={classes.content}>
          <TextField
            id="standard-helperText"
            label="Title"
            defaultValue={title}
            onChange={(text) =>
              setInputs({ ...inputs, title: text.target.value })
            }
          />

          <IconButton aria-label="cancel" onClick={() => setEdit(false)}>
            <CancelOutlined />
          </IconButton>
        </div>
      ) : (
        <CardHeader
          title={title}
          action={
            <IconButton
              aria-label="cancel"
              onClick={() => dispatch(deletePost(id))}
            >
              <CancelOutlined />
            </IconButton>
          }
        />
      )}
      <CardContent>
        {edit ? (
          <div>
            <CardMedia
              image={inputs.image}
              className={classes.media}
              onClick={() => setOpenModal(true)}
            />
            <Modal
              className={classes.modalContainer}
              open={openModal}
              onClose={() => setOpenModal(false)}
            >
              <ImageList img={(e) => imageHandler(e)} setOpen={setOpenModal} />
            </Modal>
          </div>
        ) : (
          <CardMedia image={image} className={classes.media} />
        )}
        <div className={classes.content}>
          {edit ? (
            <TextField
              id="standard-helperText"
              label="creator"
              defaultValue={creator}
              onChange={(text) =>
                setInputs({ ...inputs, creator: text.target.value })
              }
            />
          ) : (
            <Typography variant="body2" component="p" className={classes.txt}>
              {creator}
            </Typography>
          )}
          {edit ? (
            <IconButton
              onClick={() => {
                dispatch(update(inputs));
                setEdit(false);
              }}
            >
              <Check />
            </IconButton>
          ) : (
            <IconButton onClick={() => setEdit(true)}>
              <Edit />
            </IconButton>
          )}
        </div>
      </CardContent>

      <CardContent>
        {edit ? (
          <TextField
            id="standard-helperText"
            label="message"
            defaultValue={message}
            onChange={(text) =>
              setInputs({ ...inputs, message: text.target.value })
            }
          />
        ) : (
          <Typography variant="body1" component="p" className={classes.body}>
            {message}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Index;
