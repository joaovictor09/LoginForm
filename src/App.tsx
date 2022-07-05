import { Icon } from "./components/icon"
import { EnvelopeSimple, Eye, SignIn } from "phosphor-react"
import { Checkbox  } from "@material-tailwind/react"

function App() {
  return (
    <div className="w-full h-full flex flex-col pt-10 px-5 gap-5">

      {/* Logo */}
      
      <div className="flex w-full items-center">
        <Icon />
        <span className="ml-1 text-lg font-bold text-text-title">camp.in</span>
      </div>

      {/* Faça seu login */}

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <SignIn 
            size={24}
            color={"#FFC632"}
          />
          <h1 className="text-2xl font-semibold text-text-title">
            Faça seu login
          </h1>
        </div>
        <span>
          Entre com suas informações de cadastro.
        </span>
      </div>

      {/* Email input */}

      <div className="flex flex-col">
        <span>
          E-mail
        </span>
        <div className="flex items-center">
          <EnvelopeSimple 
            size={20}
            className="absolute ml-3"
          />
          <input 
            type="password" 
            placeholder="Digite seu e-mail"
            className="w-full pl-9 py-4 bg-background border border-border-color rounded-sm focus-within:border-2 focus-within:border-primary-color outline-none"
          />
        </div>
      </div>

      {/* Pass input */}

      <div className="flex flex-col">
        <span>
          E-mail
        </span>
        <div className="flex items-center justify-between">
          <EnvelopeSimple 
            size={20}
            className="absolute ml-3"
          />
          <input 
            type="password" 
            placeholder="Digite seu e-mail"
            className="w-full pl-9 py-4 bg-background border border-border-color rounded-sm focus-within:border-2 focus-within:border-primary-color outline-none"
          />
          <button className="flex items-center">
            <Eye 
              size={20}
              className="absolute right-0 mr-8"
            />
          </button>
        </div>
      </div>

      {/* Remember me and forgot my pass */}

      <div className="flex items-center justify-between">
        <div className="flex items-center"> 
          <input 
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-border-color rounded-sm bg-background checked:bg-primary-color checked:border-primary-color focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <span>
            Lembrar-me
          </span>       
        </div>

        <a 
          href="#"
          className="text-primary-color"
        >
          Esqueci minha senha
        </a>
      </div>

      {/* Login Button */}

      <button className="w-full py-3 bg-primary-color text-[#473404] font-bold text-lg rounded-md">
        ENTRAR
      </button>

      <a href="#" className="w-full flex items-center">
        <span className="w-full text-center text-primary-color">Não tem uma conta? <span className="font-semibold">Registre-se</span></span>
      </a>

    </div>
  )
}

export default App
