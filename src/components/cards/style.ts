import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    background: theme.palette.primary.dark,
    margin: "auto",
  },

  media: {
    height: 150,

    width: 300,
    margin: "auto",
    cursor: "pointer",
    [theme.breakpoints.down(300)]: {
      width: 200,
    },
    [theme.breakpoints.between(300, 370)]: {
      width: 280,
    },
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
