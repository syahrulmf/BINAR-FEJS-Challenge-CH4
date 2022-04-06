import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainRoute from './routes/MainRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MainRoute />
      <Footer />
    </>
  );
}

export default App;
