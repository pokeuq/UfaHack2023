import user_icon from '../assets/icons/person.png'
import email_icon from '../assets/icons/email.png'
import password_icon from '../assets/icons/password.png'
   
const Login = () => {
    return (
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div>
                <div>Войти</div>
                <div></div>
            </div>
            <div>
                <div>
                    <img src={user_icon} alt="" />
                    <input type="text" />
                </div>

                <div>
                    <img src={email_icon} alt="" />
                    <input type="text" />
                </div>

                <div>
                    <img src={password_icon} alt="" />
                    <input type="text" />
                </div>
            </div>
            <div>
                <div>Войти</div>
            </div>
        </div>
       
    )
  }
  
  export default Login
