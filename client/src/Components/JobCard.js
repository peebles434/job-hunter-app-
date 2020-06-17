import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReactHtmlParser from "react-html-parser";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    minWidth: "sm",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    borderRadius: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const JobCard = observer((job) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   Takes date received
  const findDaysAgo = () => {
    const monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const isMonthInt = (element) => {
      return element == job.job.job.created_at.substring(4, 7);
    };

    let day = parseInt(job.job.job.created_at.substring(8, 10));
    let month = monthArr.findIndex(isMonthInt);
    let year = parseInt(job.job.job.created_at.substring(24, 28));

    let postedDate = new Date(year, month, day).getTime();
    let today = new Date().getTime();
    let difference = today - postedDate;
    let daysAgo = Math.floor(difference / 1000 / 60 / 60 / 24);
    return daysAgo;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={job.job.job.company}
        subheader={job.job.job.location}
      />
      <CardMedia
        className={classes.media}
        image={job.job.job.company_logo}
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Posted {findDaysAgo()} day(s) ago
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Description:</Typography>
          {ReactHtmlParser(job.job.job.description)}
        </CardContent>
      </Collapse>
    </Card>
  );
});
