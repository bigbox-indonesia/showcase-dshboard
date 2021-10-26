import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        paddingTop: '56px',
        paddingBottom: '56px',
    },
    highlightCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '460px',
        color: 'white',
        marginBottom: '31px',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 38.11%, rgba(0, 0, 0, 0.75) 95.63%), url(/vaksinasi.png)',
        '& > div': {
            padding: '24px 44px',
            '& > h3': {
                fontSize: '34px',
                lineHeight: '44px',
                maxWidth: '988px',
            },
        },
    },
    highlightCapt: {
        backgroundColor: '#184E77',
        '& > p': {
            fontSize: '20px',
            lineHeight: '26px',
        },
    },
    featuredCard: {
        backgroundColor: '#184E77',
        color: 'white',
        height: '216px',
        padding: '39px 44px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& > div:first-child': {
            '& > h3': {
                fontSize: '28px',
                lineHeight: '44px',
            },
        },
    },
    btnReadMore: {
        background: 'none',
        color: 'white',
        border: '1px solid white',
        borderRadius: '100%',
        width: '27px',
        height: '27px',
    },
    btnFeaturedWrapper: {
        '& > button': {
            float: 'right',
        },
    },
    readmoreLinkWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& > p': {
            marginRight: '10px',
        },
    },
})

export default useStyles;
