import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => {
  const theme = useTheme()
  const tabletHd = theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');
  return {
    root: {
      maxWidth: '1366px',
      width: '100%',
      margin: 'auto',
      boxSizing: 'border-box',
      paddingLeft: '24px',
      paddingRight: '24px',
      [tablet]: {
        paddingLeft: '44px',
        paddingRight: '44px',
      },
      [tabletHd]: {
        paddingLeft: '60px',
        paddingRight: '60px',
      },
    },
  };
});

export default useStyles;
