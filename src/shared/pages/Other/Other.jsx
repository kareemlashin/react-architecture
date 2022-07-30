import React, { PureComponent } from 'react';
import { Outlet } from "react-router-dom";
import { Navigate ,NavLink} from "react-router-dom";
import UiLibrary from './components/UiLibrary/UiLibrary';

class Other extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  token=()=>{
    localStorage.removeItem('token');
    window.dispatchEvent(new Event("storage"));
    return  <Navigate to="/" replace={true} />

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

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="OtherWrapper">
        Test OtherWrapper
        <button onClick={()=>{
          this.token()
        }}>
        remove token
        </button>
        <div>
        <NavLink  to="/Base/Home"> home</NavLink>
        <NavLink  to="/Base/about"> about</NavLink>
        </div>
        <div>
          <Outlet />
          <UiLibrary />
        </div>
      </div>
    );
  }
}

Other.propTypes = {
  // bla: PropTypes.string,
};

Other.defaultProps = {
  // bla: 'test',
};

export default Other;
