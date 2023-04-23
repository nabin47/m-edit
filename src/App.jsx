import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = event => {
    setMarkdown(event.target.value);
  };

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="container">
          <textarea
            className="input-area"
            placeholder="Type here!"
            value={markdown}
            onChange={handleChange}
          />
          <ReactMarkdown className="output-area">{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
