import React from "react";
import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    textAlign: "center",
  }
}));

function Header() {
  const classes = useStyles();
  const [butDisabled, setbutDisabled] = useContext(CardsContext);
  return (
    <>
      <Grid container justify="center">
        <ButtonGroup
          variant="contained"
          color="primary"
          className={classes.root}
        >
          <Button
            disabled={butDisabled ? false : true}
            onClick={() => setbutDisabled(false)}
          >
            Not Login
          </Button>
          <Button
            disabled={butDisabled ? true : false}
            onClick={() => setbutDisabled(true)}
          >
            Not Admin
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
}

export default Header;
