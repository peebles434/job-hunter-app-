import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    minWidth: 'sm',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    borderRadius: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[800],
  },
}));
