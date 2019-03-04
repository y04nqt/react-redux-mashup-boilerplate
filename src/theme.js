import { createMuiTheme } from '@material-ui/core/styles';

const GREEN = "#009344"

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            // 3 VUE Green
            main: GREEN,
            contrastText: '#fff'
        }
    }
})
