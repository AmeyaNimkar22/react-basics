
function Login(props){
    if(props.isLogged){
        return <h1 className="logged">Welcome {props.name}</h1>;
    }
    else{
        return <h1 className="notlogged">You are not logged in</h1>;
    }
}

Login.defaultProps={
    name:"Guest",
    isLogged:false,
}

export default Login