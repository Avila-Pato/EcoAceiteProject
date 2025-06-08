import { SignIn } from '@clerk/clerk-react'
const Login  = () => {
  return (
      <div className="sign-in-container">
      <SignIn
      appearance={{
        baseTheme: "dark",
      elements: {
      card: "rounded-2xl shadow-xl",
      formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700",
      headerTitle: "text-white",
    }
      }}

forceRedirectUrl={"/home"} />
    </div>
    )
 
}

export default Login;