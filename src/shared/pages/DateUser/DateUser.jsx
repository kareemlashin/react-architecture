import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './DateUser.styles';

class DateUser extends PureComponent { 
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
      <div className="DateUserWrapper">
        Test content
      </div>
    );
  }
}

DateUser.propTypes = {
  // bla: PropTypes.string,
};

DateUser.defaultProps = {
  // bla: 'test',
};

export default DateUser;
