import './sass/main.scss'
import Header from './components/header'
import Main from './components/body1'
import Main2 from './components/body2'
import Main3 from './components/body3'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Main2 />
      <Main3 />
      <Footer />
    </div>
  );
}

export default App;
