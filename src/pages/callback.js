import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    
    if (accessToken) {
      // Store the access token securely, e.g., in local storage
      localStorage.setItem('spotifyAccessToken', accessToken);
      
      // Redirect user to the main page or wherever needed
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <h1>Processing...</h1>
    </div>
  );
};

export default Callback;
