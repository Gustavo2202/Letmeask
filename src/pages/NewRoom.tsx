import  { Link } from 'react-router-dom';
import illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
                    
                    <h2>Criar uma nova sala</h2>
                    <form >
                        <input type="text"
                        placeholder='Nome da sala'
                        />
                       <Button  type="submit" >
                        Criar sala
                        </Button>
                    </form> 
                    <p> Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>  </p>
                    
                </div>
            </main>
        </div>
    )
}