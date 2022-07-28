// 2. Write a JavaScript program to sort by id an array of JavaScript objects.
let Obj =[ {
            Id: 45,
            Name: "ram"
            },{
            Id: 4,
            Name: "raju"
            },{
            Id: 90,
            Name: "kumar"
}]

function comparision(a,b) {
    if(a.Id < b.Id){ return -1;}
    if(a.Id > b.Id){ return 1;}
    return 0;
}

console.log(Obj.sort(comparision));