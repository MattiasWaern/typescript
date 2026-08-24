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