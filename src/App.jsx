import { Routes, Route } from 'react-router-dom';
import Layout from './shared/Layout';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
