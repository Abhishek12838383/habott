import './App.css';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import Hero2 from './component/hero2/Hero2';
import Nav from './component/nav/Nav';
import Ver from './component/verified/Ver';
import Video from './component/video/Video';
import Work from './component/works/Work';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Hero/>
    <Hero2/>
    <Video/>
    <Ver/>
<Work/>
    <Footer/>
    </div>
  );
}

export default App;
