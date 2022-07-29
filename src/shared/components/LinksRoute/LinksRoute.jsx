import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from '../../pages/Login/Login';
import About from '../../pages/About/About';
import Users from '../../pages/Users/Users';
import Other from '../../pages/Other/Other';
import OtherAll from '../../pages/OtherAll/OtherAll';
import OtherDeta from '../../pages/OtherDeta/OtherDeta';

let token = localStorage.getItem("token");

class LinksRoute extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
  }

  componentDidMount = () => {
    window.addEventListener("storage", () => {
      token = localStorage.getItem("token");
      this.setState({
        hasError: true,
      });
      setTimeout(() => {
        // code
        this.setState({
          hasError: false,
        });
      }, 1);
    });
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
      <div className="LinksRouteWrapper">
        <BrowserRouter>
          <Routes>
            {(() => {
              if (!token) {
                return (
                  <>
                    <Route path="/Admin" element={<Login />}>
                      <Route path="about" element={<About />} />
                      <Route path="Profile" element={<Users />} />

                      <Route path="" element={<Navigate replace to="about" />} />
                    </Route>
                    <Route
                      path="/"
                      element={<Navigate replace to="/Admin" />}
                    />
                    <Route
                      path="*"
                      element={<Navigate replace to="/Admin" />}
                    />
                  </>
                );
              } else {
                return (
                  <>
                    <Route path="/Base" element={<Other />}>
                      <Route path="Home" element={<OtherAll />} />
                      <Route path="about" element={<OtherDeta />} />
                      <Route path="" element={<Navigate replace to="about" />} />
                    </Route>
                    <Route path="/" element={<Navigate replace to="/Base" />} />
                    <Route path="*" element={<Navigate replace to="/Base" />} />
                  </>
                );
              }
            })()}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}


export default LinksRoute;
