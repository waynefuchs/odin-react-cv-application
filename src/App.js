import './styles/App.css';
import Header from './components/Header';
import General from './components/General';
import Footer from './components/Footer';
import Education from './components/Education';
import Practical from './components/Practical';

function App() {
  const isEditing = false;

  return (
    <div>
      <Header />
      <div className="base">
        <General isEditing={isEditing} />
        <Education />
        <Practical />
      </div>
      <Footer />
    </div>
  );
}

export default App;
