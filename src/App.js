import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey={apiKey} category="" />} />
            <Route exact path="/business" element={<News key="business" apiKey={apiKey} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" apiKey={apiKey} category="health" />} />
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
