import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonPage } from './Buttons/ButtonPage';
import { CharacterPage } from './Character/CharacterPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RGBContextProvider } from './Color/context';
import { ColorPage } from './Color/ColorPage';
import { HookPage } from './Hooks/HookPage';

ReactDOM.render(
  <React.StrictMode>
    {/* <Application /> */}
    {/* <Alert/> */}
    {/* <Country/> */}
    {/* <PizzaPage/> */}
    {/* <ThemeProvider> */}
      {/* <ColorPage/> */}
    {/* </ThemeProvider> */}

    {/* <RGBContextProvider>
      <ColorPage/>
    </RGBContextProvider> */}
    {/* <CharacterPage/> */}

    <HookPage/>
    {/* <ButtonPage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
