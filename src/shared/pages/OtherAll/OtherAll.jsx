import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './OtherAll.styles';

class OtherAll extends PureComponent { 
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
      <div className="OtherAllWrapper">
        Test content
      </div>
    );
  }
}

OtherAll.propTypes = {
  // bla: PropTypes.string,
};

OtherAll.defaultProps = {
  // bla: 'test',
};

export default OtherAll;
