import FallingHearts from './components/FallingHearts'
import Home from './pages/Home';

function App() {

  return (
    <div className="app-container">
      <FallingHearts />

      <Home />

      <div className="page-copyright">
        © {new Date().getFullYear()} Developed by Farrell Liko T.
      </div>
    </div >
  );
}

export default App