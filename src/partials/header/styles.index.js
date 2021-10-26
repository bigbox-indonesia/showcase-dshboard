import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        root: {
            height: '118px',
            display: 'flex',
            alignItems: 'center',
        },
        logoContainer: {
            display: 'flex',
            '& > div': {
                textTransform: 'uppercase',
                color: '#212223',
                '& > p:first-child': {
                    fontSize: '24px',
                    lineHeight: '27px',
                },
                '& > p:nth-child(2)': {
                    fontSize: '17px',
                    lineHeight: '21px',
                    fontWeight: '700',
                },
            },
        },
        logo: {
            marginRight: '10px'
        },
        nav: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '& > ul': {
                display: 'flex',
                justifyContent: 'space-between',
            },
        },
    }
})

export default useStyles;
