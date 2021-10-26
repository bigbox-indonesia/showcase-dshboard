import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root:{
        height: '263px',
        display: 'flex',
        alignItems: 'center',
    },
    cardContainer: {
        display: 'flex',
        '& > div:first-child': {
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
        },
        '& > div:last-child': {
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
        },
    },
    card: {
        width: '100%',
        minWidth: '150px',
        padding: '32px 84px',
        color: 'white',
        textAlign: 'center',
        '& > p:first-child': {
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '60px',
        },
        '& > p:nth-child(2)': {
            fontSize: '18px',
            lineHeight: '20px',
        },
    },
    heading: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '40px',
        textAlign: 'center',
        marginTop: '20px',
    }
 });

export default useStyles;
