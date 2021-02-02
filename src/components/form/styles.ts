import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",

    margin: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  contain: {
    display: "flex",
  },
  input: {
    color: theme.palette.secondary.dark,
  },
  txt: {
    margin: "1.5rem 0",
  },
  txtField: {
    margin: "1rem ",
  },

  modal: {
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  img: {
    cursor: "pointer",
  },
}));
