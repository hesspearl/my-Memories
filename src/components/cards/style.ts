import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 250,

    margin: theme.spacing(3),
    background: theme.palette.primary.dark,
  },

  media: {
    height: 200,
    minWidth: 200,
    width: 500,
    margin: "auto",
    cursor: "pointer",
  },
  txt: {
    color: theme.palette.secondary.dark,
    background: theme.palette.primary.main,
    padding: ".5rem 1rem",
    width: "30%",
    margin: "0.5rem 1rem",
    borderRadius: 100,
  },

  body: {
    background: theme.palette.primary.main,
    borderStyle: "solid",
    borderWidth: " 1px",
    padding: ".5rem 1rem",
    height: "50px",
    margin: "auto",
    borderRadius: 10,
  },

  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
  },
}));
