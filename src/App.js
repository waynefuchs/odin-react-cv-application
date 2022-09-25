import './styles/App.css';
import Header from './components/Header';
import General from './components/General';
import Footer from './components/Footer';
import Education from './components/Education';
import Practical from './components/Practical';

function App() {
  const isEditing = true;

  return (
    <div>
      <Header />
      <div className="base">
        <General isEditing={isEditing} />
        <Education isEditing={isEditing} />
        <Practical isEditing={isEditing} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
