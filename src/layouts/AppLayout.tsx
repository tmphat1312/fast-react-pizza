import { Fragment } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import LoadingIndicator from '../ui/LoadingIndicator';

export default function AppLayout() {
  const navigation = useNavigation();

  return (
    <Fragment>
      {navigation.state == 'loading' && <LoadingIndicator />}

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
}
