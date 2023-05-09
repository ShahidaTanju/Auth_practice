import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.config';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GoogleAuthProvider();

const auth = getAuth(app);


function App() {

  const GoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(data => {
        const user = data.user;
        console.log(user);
      })
      .catch(err => console.error(err));
  };


  const GitHubLogIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(data => {
        const user = data.user;
        console.log(user);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={GoogleLogIn}>Log In with Google</button>
      <button onClick={GitHubLogIn}>Log In with GitHub</button>
    </div>
  );
}

export default App;
