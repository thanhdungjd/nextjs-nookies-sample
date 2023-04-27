import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

const SEARCH_RESULT_CATFISH_DISPLAY = 'searchResultCatfishDisplay';

const Toolbar = ({ visible, onHide }) => {
  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <p>This is a toolbar!</p>
      <button onClick={onHide}>Hide for 2 hours</button>
    </div>
  );
};

const Home = () => {
  const [showToolbar, setShowToolbar] = useState(true);

  useEffect(() => {
    const cookies = parseCookies();
    const showToolbarCookie = cookies[SEARCH_RESULT_CATFISH_DISPLAY];
    if (showToolbarCookie === 'false') {
      setShowToolbar(false);
    }
  }, []);

  const handleHideToolbar = () => {
    setShowToolbar(false);
    setCookie(null, SEARCH_RESULT_CATFISH_DISPLAY, 'false', { maxAge: 7200 });
  };

  return (
    <div>
      <Toolbar visible={showToolbar} onHide={handleHideToolbar} />
      <p>Some content here</p>
    </div>
  );
};

export default Home;
