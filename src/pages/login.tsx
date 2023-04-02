import { auth } from '@/lib/firebaseConfig';
import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import type { User } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export default function LoginPage() {
    const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <main className=''>
            <div className='flex min-h-screen justify-center items-center'>
            {user ? (
        <div>
          <p>Hello, {user.displayName}</p>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
            </div>
        </main>
    </>
  );
}
