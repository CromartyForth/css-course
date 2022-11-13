

// syntax: addEventListener("event", function, useCapture = false)

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp1();
        initApp2();
    }
})

const initApp2 = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");

    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })

}


const initApp1 = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
        
        //view.classList.add("purple");
        //view.classList.remove("darkblue");

        //view.style.backgroundColor = "purple";
        console.log(`view: ${event.target}`);
    }, false);

    div.addEventListener("click", (event) => {
        // event.stopPropagation(); 
        //div.style.backgroundColor = "blue";
        div.classList.toggle("black");
        div.classList.toggle("blue");
        console.log(`div: ${event.target}`);
    }, false);

    // useCapture true means the event doesn't bubble up
    // but bubbles down from the top listener
    h2.addEventListener("click", (event) => {
        // event.stopPropagation();
        const myText = event.target.textContent;
        const state1 = "Hey! Watch it!"
        const state2 = "Ready"

        myText === state1 ? event.target.textContent = state2 : event.target.textContent = state1;
        
        console.log(`h2: ${event.target}`);
    }, false);

    nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    })  
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })



}

/* const doSomething = () => {
    alert("Don't touch that!");
}
// this named event can be removed
h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

// this anonymous event can not be removed
h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Oh No!";
}) */

