//-----------------------------------------negative to the end---------------------------------------------------------



let brr = [-5, 3,-4,88,-9,-10,21,5,6];

function negativeToTheLeft(a) {
    let b = [], c = [];
    for(let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            b.push(a[i]);
        }
        else {
            c.push(a[i]);
        }
    }
    return c.concat(b);
}

console.log(negativeToTheLeft(brr));