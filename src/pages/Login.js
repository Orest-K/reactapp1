import {useState} from "react";

export default function Login() {
    let [formState, setFormState] = useState({login:'', password:''})

    function onSubmit(data){
        data.preventDefault()
        console.log(formState)
    }

    function onChange (data){
        setFormState({...formState, [data.target.name]: data.target.value})
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={onChange}/>
                <button>submit</button>
            </form>
        </div>
    )
}