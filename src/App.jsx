import './App.css';
import Webcam from 'react-webcam';
import Layout from './components/Layout';
import Joblist from './components/Joblist';
import Userlist from './components/Userlist';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Userlist />
      </Layout>
    </div>
  );
};

export default App;
