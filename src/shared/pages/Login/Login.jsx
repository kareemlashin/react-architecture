import React, { PureComponent } from 'react';
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

//import { Test } from './Login.styles';

class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
  }

  componentDidMount = () => {
  }

  componentWillReceiveProps = (nextProps) => {
  }

  componentWillUpdate = (nextProps, nextState) => {
  }

  componentDidUpdate = () => {
  }

  componentWillUnmount = () => {
  }

  token=()=>{
    
    localStorage.setItem('token','tooooo');
    window.dispatchEvent(new Event("storage"));

    return  <Navigate to="/" replace={true} />

  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoginWrapper">
        Test LoginWrapper 
        <button onClick={()=>{
          this.token()
        }}>
        token
        </button>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
