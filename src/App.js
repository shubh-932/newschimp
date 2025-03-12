import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';

function App() {

  // const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <ThemeProvider>
        <LocaleProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News key="general" category="" />} />
              <Route exact path="/business" element={<News key="business" category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" category="health" />} />
              <Route exact path="/science" element={<News key="science" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" category="technology" />} />
            </Routes>
          </BrowserRouter>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
