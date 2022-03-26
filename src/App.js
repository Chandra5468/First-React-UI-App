import './App.css';
import { Brand , CTA, Navbar } from './components'
import {Footer, Blog, Possibility, Header,Features, WhatGpt3} from './containers'
function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGpt3></WhatGpt3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
