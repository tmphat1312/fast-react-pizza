import { useNavigate } from 'react-router-dom';

import CreateUser from '../features/user/CreateUser';
import { useAppSelector } from '../hooks/useAppSelector';
import Button from './Button';

export default function Home() {
  const username = useAppSelector((state) => state.user.username);
  const navigate = useNavigate();

  return (
    <section className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-bold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-primary-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username.length == 0 ? (
        <CreateUser />
      ) : (
        <Button onClick={() => navigate('/menu')}>
          Continue ordering, {username}
        </Button>
      )}
    </section>
  );
}
