import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        root: {
            backgroundColor: '#F2F4F5',
            padding: '54px 0',
        },
        card: {
            '& > div': {
                backgroundColor: '#f2f2f2',
                height: '298px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
        indicatorWidgetContainer: {
            padding: '30px 34px',
            marginTop: '46px',
            backgroundColor: 'white',
            '& > h3': {
                marginBottom: '34px',
                fontSize: '24px',
                lineHeight: '40px',
            },
        },
        cardWidget: {
            '& > div': {
                backgroundColor: '#184E77',
                height: '140px',
                boxSizing: 'border-box',
                borderRadius: '7px',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '& > p:first-child': {
                    fontWeight: 500,
                    fontSize: '42px',
                    lineHeight: '53px',
                },
                '& > p:last-child': {
                    maxWidth: '156px',
                },
            },
        },
    }
})

export default useStyles;
