import {Colors} from "./Colors";
export const palette = {
    primary: {
        main: Colors.primary,
        dark:Colors.primary_dark,
    },
    secondary: {
        main: Colors.secondary,
        dark:Colors.secondary_dark
    },
}
const appTheme = {
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  fontFamily: ['Archivo','Urbanist'].join(',');
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
               `,
        },

    },

    shape: {
        searchbar: {
            boderRadius:50
        }
    }
}
export default appTheme