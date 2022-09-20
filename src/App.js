import Header from './Header';
import General from './General';
import Footer from './Footer';
import './styles/App.css';
import Education from './Education';

function App() {
  return (
    <div>
      <Header />
      <div className="base">
        <General />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default App;
