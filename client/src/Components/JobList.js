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
  const { jobMapToArray, setJobs } = useJobStore();
  const [tempJobs, setTempJobs] = useState([]);
  const [state, setState] = useState({ apiResponse: "" });

  const classes = useStyles();

  const url = "https://jobs.github.com/positions.json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetch(proxyUrl + url)
      .then((res) => res.json())
      .then((result) => {
        setTempJobs(result);
      });
  }, []);

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      if (tempJobs.length > 0) {
        let job = {
          id: tempJobs[i].id,
          company: tempJobs[i].company,
          company_logo: tempJobs[i].company_logo,
          company_url: tempJobs[i].company_url,
          created_at: tempJobs[i].created_at,
          description: tempJobs[i].description,
          how_to_apply: tempJobs[i].how_to_apply,
          location: tempJobs[i].location,
          title: tempJobs[i].title,
          type: tempJobs[i].type,
          url: tempJobs[i].url,
        };
        setJobs(job);
      }
    }
  }, [tempJobs]);

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
