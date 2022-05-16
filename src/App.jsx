import './App.css';
import Webcam from 'react-webcam';
import Layout from './components/Layout';
import Joblist from './components/Joblist';
import Userlist from './components/Userlist';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Userlist />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
