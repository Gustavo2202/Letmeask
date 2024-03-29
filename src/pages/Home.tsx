import {useNavigate} from 'react-router-dom';


import illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../App';



export function Home() {

    const navigate = useNavigate(); 
    const {user,SignInWithGoogle} = useContext(AuthContext)
   async function handleCreateRoom(){
        
        if(!user){
           await SignInWithGoogle();
        }

        navigate('/rooms/new');  
        
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={illustration} alt="ilustação simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as suas duvidas em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    
                    <img src={logo} alt="logo da  letmeask" />
                    <button onClick={handleCreateRoom} className='create-room '>
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form >
                        <input type="text"
                        placeholder='Digite o codigo da sala'
                        />
                       <Button  type="submit" >
                        Entrar na sala
                        </Button>
                    </form> 
                    
                </div>
            </main>
        </div>
    )
}