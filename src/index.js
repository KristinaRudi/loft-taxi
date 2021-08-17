import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";

import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

// export const theme = createMuiTheme({
//     palette: {
//       primary: {
//         main: "#ffc617"
//       },
//       secondary: {
//         main: "#ff0000"
//       }
//     },
//     status: {
//       danger: orange[500]
//     },
//     overrides: {
//       MuiFormLabel: {
//         root: {
//           "&$focused": {
//             color: "#1473e6"
//           }
//         }
//       },
//       MuiLink: {
//         root: {
//           color: "#1473e6",
//           cursor: "pointer"
//         }
//       },
//       MuiInput: {
//         underline: {
//           "&:after": {
//             "border-bottom-color": "#1473e6"
//           }
//         }
//       },
//       MuiFormHelperText: {
//         root: {
//           position: "absolute",
//           bottom: "-1.2em"
//         }
//       },
//       MuiButton: {
//         root: {
//           textTransform: 'none'
//         },
//         containedPrimary: {
//           boxShadow: "none",
//           backgroundColor: "#ffc617",
//           "&:focus": {
//             boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
//           }
//         }
//       }
//     }
//   });


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
