import { Helmet } from 'react-helmet-async';

import SignUp from 'src/sections/register/register-view';

// ----------------------------------------------------------------------

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title> Sign Up | Toursboat </title>
      </Helmet>

      <SignUp />
    </>
  );
}
