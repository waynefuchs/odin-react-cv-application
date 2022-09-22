import './styles/App.css';
import Header from './Header';
import General from './General';
import Footer from './Footer';
import Education from './Education';
import Practical from './Practical';

function App() {
  return (
    <div>
      <Header />
      <div className="base">
        <General />
        <Education />
        <Practical />
      </div>
      <Footer />
    </div>
  );
}

export default App;
