import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme, ThemeProvider,  } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes'
import { Loading, Notify, Alert, Confirm } from "./view/components";
import './global.css'




const theme = createTheme({
  
  palette: {
    
    
  },

  components: {

      MuiTextField: {
          defaultProps: {
            fullWidth: true
          }
      },

     

  }
  
});

 
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Alert />
        <Notify />
        <Loading />
        <Routes />
      </ThemeProvider>
    </Provider>
    
  )
}

export default App;
