import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme, ThemeProvider,  } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './Routes'
import { Loading } from "./view/components";
import './global.css'




const theme = createTheme({
  
  palette: {
      primary: {
        main: '#f57c00',
      },
    
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
        
          <h1 className="text-success">Você está no / </h1>
         

        <Loading />






        <Routes />
      </ThemeProvider>
    </Provider>
    
  )
}

export default App;
