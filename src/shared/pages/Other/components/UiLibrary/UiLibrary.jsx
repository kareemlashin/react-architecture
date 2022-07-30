import i18next from 'i18next';
import React, { PureComponent } from 'react';

class UiLibrary extends PureComponent { 
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('UiLibrary will mount');
    i18next.on("languageChanged",(language)=>{
      console.log(language)
    })
  }

  componentDidMount = () => {
    console.log('UiLibrary mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('UiLibrary will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('UiLibrary will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('UiLibrary did update');
  }

  componentWillUnmount = () => {
    console.log('UiLibrary will unmount');
  }

  render () {
    console.log('render');
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UiLibraryWrapper">
        <div>
        Ui Library 
        </div>
      </div>
    );
  }
}

export default UiLibrary;
