type GreetingProps = {
    name: string;
    age?: number;
};


export function Greeting({name, age}: GreetingProps){
    return(
        <div>
            <h2>Hell, {name}</h2>
            {age !== undefined && <p>You are {age} years old</p>}
        </div>
    )
}




function nameInput(){
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
    }
    return <input onChange={handleChange}/>
}


function saveButton(){
    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
    }
    return <button onClick={handleClick}>Save</button>;
}