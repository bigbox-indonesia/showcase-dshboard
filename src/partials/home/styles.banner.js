import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return {
    root: {
      height: '630px',
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/jatim-landmark.jpg)',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
    },
    contentWrapper: {
      '& > h1, & > p': {
        color: 'white',
      },
      '& > h1': {
        fontWeight: 'bold',
        fontSize: '54px',
        lineHeight: '63px',
        textTransform: 'uppercase',
        marginBottom: '31px',
      },
      '& > p': {
        fontSize: '25px',
        lineHeight: '30px',
        fontStyle: 'italic',
        maxWidth: '588px',
        marginBottom: '46px',
      },
    },
    inputSearch: {
      width: '632px',
      padding: '17px 24px',
      boxSizing: 'border-box',
      border: 'none',
      fontWeight: 500,
      '&:placeholder': {
        fontWeight: 500,
        color: '#949FAA',
      },
    },
    btnSearch: {
      marginLeft: '-55px !important',
      backgroundColor: '#184E77 !important',
      borderRadius: '8px !important',
      '& > svg': {
        color: 'white',
      },
    },
  };
});

export default useStyles;
