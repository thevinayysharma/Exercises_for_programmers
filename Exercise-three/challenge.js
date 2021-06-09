const db = [
    {
        name: " Alex",
        quote: "Winner never quit!"
    },
    {
        name: "George",
        quote: "Choice is always yours to do big"
    }, 
    {
        name: "Elon",
        quote: "Do thins that ticks and make impacts"
    }
]


function output() {
    db.map(item => {
        <ul>
            <li>name</li>
            <li>quote</li>
        </ul>
    })
}

//for in method
for( const prop in db) {
    console.log(`${prop} = ${obj[prop]}`);
}

const btn = document.createElement("button");
document.body.appendChild(btn);
btn.addEventListener("click", output);