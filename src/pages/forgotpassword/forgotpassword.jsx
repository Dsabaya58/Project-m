import { Helmet } from 'react-helmet-async';

import ChangepasswordPage from 'src/sections/forgotpassword/forgotpassword-view';

// ----------------------------------------------------------------------

export default function ChangePassword() {
  return (
    <>
      <Helmet>
        <title> ChangePassword Page | Toursboat </title>
      </Helmet>

      <ChangepasswordPage />
    </>
  );
}
