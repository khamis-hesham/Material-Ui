import React from "react";
import { useContext, useState } from "react";
import { CardsContext } from "../context/CardsContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonGroup,
  Grid,
  Card,
  Paper,
  CardContent,
  Typography,
  CardActions,
  Popover,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
    },
    textAlign: "center",
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const users = [
  "khamis",
  "lina",
  "hassan",
  "iman",
  "zain",
  "khamis",
  "lina",
  "hassan",
  "iman",
  "zain",
];

function Cards() {
  const classes = useStyles();
  const butDisabled = useContext(CardsContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPop, setShowPop] = useState({});

  const handleClick = (index, event) => {
    setShowPop(() => ({ [index]: true }));
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setShowPop({});
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3} justify="center">
        {users.map((user, index) => (
          <Card key={index}>
            <Paper>
              <Typography variant="subtitile2" component="p">
                {user}
              </Typography>
            </Paper>
            <CardContent>
              <Typography variant="h5" component="p">
                {user}
              </Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup
                variant="contained"
                color="primary"
                size="small"
                className={classes.root}
              >
                <Button
                  disabled={butDisabled[0] ? true : false}
                  aria-describedby={id}
                  onClick={(e)=> handleClick(index,e)}
                >
                  Admin
                </Button>
                <Button disabled={butDisabled[0] ? true : false}>Logged in</Button>
                <Button
                  disabled={butDisabled[0] ? false : true}
                  onClick={(e)=> handleClick(index,e)}
                >
                  Guest
                </Button>
              </ButtonGroup>
              <Popover
                id={id}
                open={showPop[index]}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {butDisabled[0]
                    ? ` Hi ${user} you are logged in welcome!`
                    : "Why you no log in, stupid..."}
                </Typography>
              </Popover>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
