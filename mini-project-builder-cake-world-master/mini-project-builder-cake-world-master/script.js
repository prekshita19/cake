/*Fill your code */
let prices = {
    'Chocolate': 300,
    'Strawberry' :100,
    'Butter Scotch' :200,
    'Vanilla' :250,
    'Red Velvet' :350
}

layers=0
let total = 0
pay = false

let states = {
    'Chocolate': false,
    'Strawberry' : false,
    'Butter Scotch' : false,
    'Vanilla' : false,
    'Red Velvet' : false,
}


function cake_show()
{
    document.getElementById('imagecake').style = 'visibility : visible;';
    pay = true;
}


function change_state(id)
{
    if (pay === false)
    {
        let arr = []
    if (states[id] === true) {
        states[id] = false
        document.getElementById('layer' + layers).style = 'visibility : hidden;';
        document.getElementById(id).style = "";
        layers--
    }
    else if (states[id] === false) {
        states[id] = true;
        layers++
        document.getElementById('layer' + layers).style = 'visibility : visible;';
        document.getElementById(id).style = "background-color:royalblue;color:black;";
    }
    else
    {
        console.log('went X')    
    }
    
    
    for (i in states)
        {
            // console.log(states[i])
            if (states[i] === true)
                {
                    arr.push([i])
                    total = prices[i] + total
                }
        }
    console.log(arr)
    for (i of arr)
    {
        document.getElementById('itemsonlist').innerHTML =  arr.join("<br>")
    }
    document.getElementById('total_price').innerHTML = 'Total :- '+ total
    total = 0    
    }
    else {
        window.location.reload();
    }
}