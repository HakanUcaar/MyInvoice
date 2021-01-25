import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider  } from "@material-ui/styles";
import {createMuiTheme,responsiveFontSizes } from "@material-ui/core";
import Main from './Components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from '@material-ui/core/Switch';

import { withSnackbar } from 'notistack';

export class App extends Component {
  constructor(){
    super();

    this.state={
      switchCheck:false,
      theme : {
        palette: {
          type: "light"
        }
      }
    }
  }

   toggleDarkTheme = () => {
    let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";
    this.setState({
      theme:{
        palette: {
          type: newPaletteType
        }
      }
    });
  };

  handleSwitchChange = (event) => {
    this.toggleDarkTheme()
    this.setState({switchCheck:event.target.checked});
  };

  async componentDidMount(){

  }
  
  render() {
    const muiTheme = createMuiTheme(this.state.theme);
    const theme = responsiveFontSizes(muiTheme);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Switch
          checked={this.state.switchCheck}
          onChange={this.handleSwitchChange}
        />          
        <Main/>     
      </ThemeProvider> 
    )
  }
}

function mapStateToProps(state) {
  return { 

  };  
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const AppSnack = withSnackbar(App);
export default connect(mapStateToProps, mapDispatchToProps)(AppSnack)
