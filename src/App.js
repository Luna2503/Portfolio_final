import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
     <div className='mb-5'>
     <Header />
     </div >
      <div >
        <Home />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
</div>
    </>
  );
}

export default App;
