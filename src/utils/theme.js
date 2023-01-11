import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#454545'
        }
    },
    typography: {
        fontFamily: [
            '"Public Sans"',
            'sans-serif',
        ].join(',')
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white'
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: '600',
                    marginLeft: 19,
                    position: 'relative',
                }
            }
        }
    }
})