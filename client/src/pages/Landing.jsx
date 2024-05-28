import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className='logo'/>
      </nav>
        <div className="container page">
          <div className="info">
            <h1>job<span>tracking</span>app
            </h1>
            <p>I'm baby godard craft beer truffaut, church-key street art helvetica mixtape cronut vape pour-over affogato selvage normcore meditation Brooklyn. Flexitarian tattooed quinoa, cloud bread put a bird on it jean shorts gentrify waistcoat. 8-bit vegan same aesthetic. Distillery shoreditch mlkshk enamel pin brunch knausgaard. Artisan 8-bit blue bottle enamel pin godard viral.</p>
                  <Link to="/register" className='btn register-link'>
                        Register 
                  </Link>
          <Link to="/login" className='btn '>
              Login /Demo User
          </Link>
        </div>
          <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  );
};





export default Landing;