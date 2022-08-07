import { useState, useEffect } from 'react';
import { supabase } from '../client';

export default function auth() {
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
            await supabase.auth.signOut(); {
                setUser(null);
            }
            if (user) {
                return (
                    <div className='auth'>
                        <h2>Hello, {user.email}</h2>
                        <button onClick={signInWithGithub()}>Login to your account</button>
                    </div>
                )
            }
        }
    }
    return (
        <div className='dash'>
            <h1>TechTack Technologies</h1>
        </div>
    )
}