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
  const { jobMapToArray, setJobs } = useJobStore();

  const classes = useStyles();

  const url = "https://jobs.github.com/positions.json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  let getJobs;

  fetch(proxyUrl + url)
    .then((response) => response.json())
    .then((jobs) => {
      for (let i = 0; i < 50; i++) {
        let job = {
          id: jobs[i].id,
          company: jobs[i].company,
          company_logo: jobs[i].company_logo,
          company_url: jobs[i].company_url,
          created_at: jobs[i].created_at,
          description: jobs[i].description,
          how_to_apply: jobs[i].how_to_apply,
          location: jobs[i].location,
          title: jobs[i].title,
          type: jobs[i].type,
          url: jobs[i].url,
        };
        setJobs(job);
      }
    });

  return (
    <div className={classes.root}>
      <h1>{getJobs}</h1>
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
