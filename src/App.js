import './App.css';

import { useState, useEffect } from 'react';
import { supabase } from './client';

function App() {
  const { user, setUser } = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function () {
      checkUser();
    })
  }, [])
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github'
    });
    async function signOut() {
      await supabase.auth.signOut();
      setUser(null);
    }
    if (user) {
      return (
        <div className="App">
          <h2>Welcome Back! {user.email}</h2>
          <button onClick={signOut()}>Sign Out</button>
        </div>
      )
    }
  }
  return (
    <div className="App">
      <h1>TechTack Technologies</h1>
      <h2>Login to your account</h2>
      <button onClick={signInWithGithub()}>Login</button>
    </div>
  );
}

export default App;
