import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"
import Highlights from './components/Highlights/Highlights';
import Testimonials from './components/Testimonials/Testimonials';
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
