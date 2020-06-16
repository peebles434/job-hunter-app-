import React from "react";
import { observer } from "mobx-react";
import {
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  createStyles,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    listItem: {
      color: "#FFFFFF",
    },
    secondary: {
      color: "#FFFFFF",
    },
  })
);

export const JobListItem = observer((job) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemText
        primary={job.job.company}
        secondary={job.job.location}
        className={classes.secondary}
      />
    </ListItem>
  );
});
