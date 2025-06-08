import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div className="sign-up-container">
      <SignUp
       appearance={{
          elements: {
            rootBox: {
              width: '100%',
              maxWidth: '500px',
              margin: '0 auto 12px'
            },
            card: {
              backgroundColor: '#f5f5f5',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              borderRadius: '40px'
              
            },
            headerTitle: {
              color: '#333',
              backgroundColor: 'rgb(207, 212, 204)', // Color verde de Google
              fontSize: '24px',
              border: '1px solid rgb(197, 228, 116)', // Borde azul de Google
              borderRadius: '40px',
              marginLeft: '80px',
              marginRight: '80px',
            },
           socialButtonsBlockButton: {
            borderBlockEnd: '2px solid #4285F4 !important', // Borde sólido azul de Google
            '&:hover': {
              border: '2px solid #3367D6' // Color más oscuro al hover
            }
          },
           
            socialButtonsBlockButtonText: {
            color: '#4285F4', // Texto azul para coincidir
            fontWeight: 'bold',
            fontSize: '16px',
          },
          socialButtonsBlockButtonArrow: {
            color: '#4285F4' // Icono azul
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
            footerActionLink: {
              color: 'rgb(220, 26, 26)',
              fontWeight: 'bold',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                color: 'rgb(200, 20, 20)'
              }
            },

           cardBox: {
            width: '100%',
            maxWidth: '500px',
           }
          }
        }} 
       forceRedirectUrl={"/home"}/>
    </div>
  )
}

export default SignUpPage