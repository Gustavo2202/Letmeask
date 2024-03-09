
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { createContext, useState } from 'react';
import { auth, firebase } from './services/firebase';

type UserType = {
  id: string,
  name: string,
  avatar: string,
}

type AuthContextType = {
  user: UserType | undefined,
  SignInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

export function App() {

  const [user, setUser] = useState<UserType>()

  async function SignInWithGoogle() {
    const provaider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provaider);

    if (result.user) {
      const {
        displayName, photoURL, uid
      } = result.user;
      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL

      })
    }

  }

  return (

    <AuthContext.Provider value={{ user, SignInWithGoogle }}>
      <Routes>
        <Route path='/' element={Home()} />
        <Route path='/rooms/new' element={NewRoom()} />
      </Routes>
    </AuthContext.Provider>
  );
}
