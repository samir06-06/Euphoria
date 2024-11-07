import { useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

const UserRoot = () => {
  let { type } = useParams();
  const location = useLocation();

  // useEffect(() => {
  //   console.log(type, 'type');
  // }, [type]);

  // const isSignInPage = location.pathname === '/sign-in';

  const HiddenLayout = ['/sign-in', '/sign-up', '/new-password', '/reset-password', '/check-email', '/verification', '/admin']

  return (
    <>
      {!HiddenLayout.includes(location.pathname) && <Header />}
      {/* {!isExcludedRoute && !isSignInPage && !isSignUpPage && !isResetPage && !isNewPage && <Header />} */}
      <Outlet />

      {!HiddenLayout.includes(location.pathname) && <Footer />}

    </>
  );
};

export default UserRoot;
