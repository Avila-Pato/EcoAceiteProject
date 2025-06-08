import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div className="sign-up-container">
      <SignUp  forceRedirectUrl={"/home"}/>
    </div>
  )
}

export default SignUpPage