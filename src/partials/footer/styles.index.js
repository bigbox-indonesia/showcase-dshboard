import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#112E51',
        paddingTop: '44px',
        paddingBottom: '30px',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    itemWrapper: {
        color: 'white',
    },
    heading: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '44px',
    },
    inputWrapper: {
        marginTop: '31px',
        height: '40px',
        '& > input': {
            width: '424px',
            height: '100%',
            boxSizing: 'border-box',
            paddingLeft: '22px',
            paddingRight: '22px',
        },
        '& > button': {
            height: '100%',
            padding: '0px 43px',
            color: 'white',
            border: 'none',
            textTransform: 'uppercase',
            boxSizing: 'border-box',
            backgroundColor: '#34A0A4',
        },
    },
    linkWrapper: {
       '& > li': {
           marginBottom: '11px',
       },
    },
    socialIconWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    input: {
        
    },
    copyright: {
        textAlign: 'center',
        color: 'white',
        lineHeight: '28px',
        marginTop: '22px',
    },
    hr: {
        marginTop: '68px',
        borderColor: 'white',
    },
})

export default useStyles;