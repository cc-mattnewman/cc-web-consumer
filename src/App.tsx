import React from 'react';
import './App.css';
import { Hello } from 'cc-auth-internal';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Sue" />
      </header>
    </div>
  );
}
