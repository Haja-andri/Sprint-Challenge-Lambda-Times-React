import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import WithAuth from './components/Auth/WithAuth'
import Login from './components/Login/Login'

const ComponentWithAuth = WithAuth (Content) (Login);

const App = () => {
  return (
    <div className="App">
      <TopBar/>
      <Header />
      <ComponentWithAuth />
    </div>
  );
}

export default App;
