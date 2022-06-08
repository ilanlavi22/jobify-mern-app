import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage'
import mainSvg from '../assets/images/main.svg';
import { Logo } from '../components';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking </span>app</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut repellendus recusandae porro accusantium nemo inventore cumque necessitatibus at! Esse.</p>
          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={mainSvg} alt='job Hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}
export default Landing;