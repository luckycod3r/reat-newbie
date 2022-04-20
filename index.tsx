import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PostItem from './Components/PostItem';
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <PostItem build={{ id: 1, title: 'title', desc: 'desc' }} />;
  }
}

render(<App />, document.getElementById('root'));
