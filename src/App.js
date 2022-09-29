import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
