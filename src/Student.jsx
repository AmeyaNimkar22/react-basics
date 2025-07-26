

function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "YES":"NO"}</p>
        </div>
    );
}

Student.defaultProps={
    name:"abc",
    age:0,
    isStudent:false,
}

export default Student