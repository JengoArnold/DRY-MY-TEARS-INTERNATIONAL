
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Router>
        <Header />
        <main className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
