import './App.css';
import Webcam from 'react-webcam';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className="App">
		<Layout>
      <h2 className="container text-2xl font-bold">App.jsx</h2>
			{/* <p><Webcam/></p> */}
			</Layout>	
    </div>
  );
};

export default App;
