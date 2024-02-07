import { useState } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import Button from '../../ui/Button';
import { setUsername as updateUsername } from './userSlice';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username.length == 0) {
      return;
    }

    dispatch(updateUsername(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="mb-8 w-72 cp-input"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username.length > 0 && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}
