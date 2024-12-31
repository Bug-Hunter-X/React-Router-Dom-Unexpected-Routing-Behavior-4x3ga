```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    console.log('Home rendered, location:', location);
  }, [location]);
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  useEffect(() => {
    console.log('About rendered, location:', location);
  }, [location]);
  return <div>About</div>;
}

export default App;
```