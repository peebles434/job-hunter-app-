import React from "react";
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
  const classes = useStyles();

  const url = "https://jobs.github.com/positions.json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  let getJobs;

  fetch(proxyUrl + url)
    .then((response) => response.json())
    .then((jobs) => {
      getJobs = () => {
        let jobCompany = jobs.company;
        jobCompany.forEach((company) => {
          return company;
        });
      };
      for (let i = 0; i < 5; i++) {
        setJobs({
          id: jobs[i].id,
          company: jobs[i].company,
        });
      }
    });

  const { jobMapToArray, setJobs } = useJobStore();

  return (
    <div className={classes.root}>
      <h1>{getJobs}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List dense={true}>
            {jobMapToArray.map((job) => (
              <Grid key={job[0]}>
                <JobListItem car={job[1]} />
              </Grid>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
});
