import CreateUser from '../features/user/CreateUser';

export default function Home() {
  return (
    <section className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-bold">
        The best pizza.
        <br />
        <span className="text-primary-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </section>
  );
}
