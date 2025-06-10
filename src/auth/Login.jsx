import { SignIn } from '@clerk/clerk-react'
const Login  = () => {
  return (
      <div className="sign-in-container">
      <SignIn
      appearance={{
          elements: {
            rootBox: {
              width: '100%',
              maxWidth: '500px',
              margin: '0 auto 12px'
            },
            card: {
              backgroundColor: '#f5f5f5',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
              borderRadius: '40px'
            },
            headerTitle: {
              color: '#333',
              fontSize: '24px',
            },
            socialButtonsBlockButton: {
              borderBlockEnd: '2px solid #4285F4 !important',
              backgroundColor: 'white !important',
              '&:hover': {
                borderBlockEnd: '2px solid #3367D6 !important',
                backgroundColor: '#f8f9fa !important'
              }
            },
            socialButtonsBlockButtonText: {
              color: '#4285F4 !important',
              fontWeight: '900',
              fontSize: '16px'
            },
            socialButtonsBlockButtonArrow: {
              color: '#4285F4 !important'
            },
            formFieldInput: {
              border: '1px solid #fff',
              borderRadius: '4px',
              padding: '12px'
            },
            formButtonPrimary: {
              backgroundColor: 'rgb(219, 13, 17)',
              '&:hover': {
                backgroundColor: 'rgb(229, 52, 55)'
              }
            },
            cardBox: {
              width: '100%',
              maxWidth: '500px',
            },
            footerActionLink: {
              color: 'red',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }
        }}

forceRedirectUrl={"/home"} />
    </div>
    )
 
}

export default Login;