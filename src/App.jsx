import './App.css';
import Webcam from 'react-webcam';

const App = () => {
  return (
    <div className="App">
      <h1 className="container text-3xl font-bold underline">Hello world!</h1>
			<p><Webcam/></p>
    </div>
  );
};

export default App;
