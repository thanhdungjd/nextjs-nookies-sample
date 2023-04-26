import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

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
    const showToolbarCookie = cookies['showToolbar'];
    if (showToolbarCookie === 'false') {
      setShowToolbar(false);
    }
  }, []);

  const handleHideToolbar = () => {
    setShowToolbar(false);
    setCookie(null, 'showToolbar', 'false', { maxAge: 7200 });
  };

  return (
    <div>
      <Toolbar visible={showToolbar} onHide={handleHideToolbar} />
      <p>Some content here</p>
    </div>
  );
};

export default Home;
