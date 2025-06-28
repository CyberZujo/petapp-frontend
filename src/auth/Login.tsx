import React, {useState, type FormEvent } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/pets-svgrepo-com.svg';

interface LoginProps {
    onSuccess?: () => void;
}


const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError]       = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
    //   const res = await axios.post(
    //     'http://localhost:8080/auth/login',
    //     { username, password },
    //     { withCredentials: true }
    //   );
    const res = 200;
      if (res === 200) {
        onSuccess?.();
        navigate('/pets');
      }
    } catch (err: any) {
      setError(err.response?.data || 'Login failed');
    }
  };

  return (
    <div className="container max-w-full mx-auto px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-6"
      >

        <div className='flex justify-center'>
            <img src={logo} alt='App Logo' className='h-12 w-12'></img>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Adopt Me
        </h2>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <div className="relative">
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder=" "
            required
            className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-indigo-500">
            Username
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder=" "
            required
            className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-indigo-500">
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;