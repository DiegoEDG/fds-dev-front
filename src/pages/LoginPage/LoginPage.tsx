import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login()}>Iniciar sesión</button>
    </div>
  );
};

export default LoginPage;
