// src/app/not-found.tsx

"use client";

import React from 'react';

const NotFoundPage = () => {
  return (
    
    
    
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Page not found</p>
      <style jsx>{`
        div {
          background-color: #f8f9fa;
          color: #333;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        p {
          font-size: 24px;
        }
      `}</style>
    </div> 



  );
};

export default NotFoundPage;
