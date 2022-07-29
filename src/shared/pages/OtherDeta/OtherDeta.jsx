import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './OtherDeta.styles';
import axios from 'axios';
const source=axios.CancelToken.source();
class OtherDeta extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
  }
  gets=()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts',
    {cancelToken: source.token}
    )
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {})
    .finally(() => {});
  }
  componentDidMount = () => {
    this.gets()
  }

  componentWillReceiveProps = (nextProps) => {
  }

  componentWillUpdate = (nextProps, nextState) => {
  }

  componentDidUpdate = () => {
  }

  componentWillUnmount = () => {
    // source.cancel()
  }
  

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="OtherDetaWrapper">
        Test content
      </div>
    );
  }
}

OtherDeta.propTypes = {
  // bla: PropTypes.string,
};

OtherDeta.defaultProps = {
  // bla: 'test',
};

export default OtherDeta;
