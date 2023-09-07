import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/catalog');
  }, []);

  return <Outlet />;
};
