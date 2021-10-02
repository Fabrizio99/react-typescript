import React from 'react';
import './App.css';

type AppProps = {
  name: string,
  children?: React.ReactNode,
  style?: React.CSSProperties
}

function App(props: AppProps) {
  return (
    <div className="App">
      <header className="App-header" style={{border: '1px solid red', ...props.style}}>
        {props.name}
        {props.children}
      </header>
    </div>
  );
}

const Application = () => <App name="Fabrizio" children={<h1>Children</h1>} style={{background: 'blue'}}/>

export default Application;
