import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { List, Grid, makeStyles, createStyles } from "@material-ui/core";
import { JobListItem } from "./JobListItem";
import { useJobStore } from "../Stores/hooks";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
  })
);

export const JobList = observer(() => {
  const { jobMapToArray } = useJobStore();

  const [state, setState] = useState({ apiResponse: "" });

  const classes = useStyles();

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setState({ apiResponse: res }));
  };

  useEffect(() => {
    callAPI();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List dense={true}>
            {jobMapToArray.map((job) => (
              <Grid key={job[0]}>
                <JobListItem job={job[1]} />
              </Grid>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
});
