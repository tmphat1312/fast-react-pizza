import { Outlet, useNavigation } from 'react-router-dom';

import LoadingIndicator from '../ui/LoadingIndicator';
import Footer from './Footer';
import Header from './Header';

export default function AppLayout() {
  const navigation = useNavigation();

  return (
    <div className="grid h-[100dvh] grid-rows-[auto_1fr_auto]">
      {navigation.state == 'loading' && <LoadingIndicator />}

      <Header />

      <div className="px-4 overflow-y-auto ">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
