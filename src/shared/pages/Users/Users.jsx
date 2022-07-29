import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Users.styles';

class Users extends PureComponent { 
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

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UsersWrapper">
        Test content
      </div>
    );
  }
}

Users.propTypes = {
  // bla: PropTypes.string,
};

Users.defaultProps = {
  // bla: 'test',
};

export default Users;
