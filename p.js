// to make things work i going to write some sudocode first.
// 1.initilize count with 0;
// 2. we have to make the button listen on click(means clickable)
// 3.we have to increment count on click .
let people=document.getElementById("count-people")

let count=0 // let is used to create a variable and initilize it .

function increment(){
    count=count+1  // here we are incrementing the count each time the button is pressed (i.e funtion is called.)
    people.innerText=count  // here the .innnerText fun is that it will modify the previous text content of the element which is being used.
}

// for decrement function.

let dec=document.getElementById("count-people")

function decrement(){
    if(count>=1){ //once count is again on 0 decrement function will stop working .
       count=count-1
       dec.innerText=count
    }
    else{
        exit()
    }
}

// to save the previous entries of the count.

let sp=document.getElementById("save-count")

function save(){
    let st=count + " - "
    // sp.innerText+=st 
    // using innerText is good to render the variable but there are other alternative for that which we can say are more effecient. like 
    // in case of innerText we got the spacing problem in our project after - so in order to correct it we have (.textContent).
    sp.textContent+=st
    // now we want that each time our save button is hit our count goes back to 0 for that.
    people.textContent=0
    count=0
}

