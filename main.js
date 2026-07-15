// Variables
let userInput = document.getElementsByName("user")[0],
    reposBtn = document.querySelector("input[type=button]"),
    theData = document.querySelector(".repos"); 


reposBtn.onclick = getReposFun;

function getReposFun (){
    if(userInput.value){
        theData.innerHTML = "";
        fetch(`https://api.github.com/users/${userInput.value}/repos`)
        .then(res=>res.json()).then(reps=>reps.forEach(rep=>{
            let myDiv  = document.createElement("div"),
                name = `<span>${rep.name}</span>`,
                stars = `<span class = "stars">Stars : ${rep.stargazers_count}</span>`,
                date = `<span class = "date">Created At :${new Date(rep.created_at).toDateString()}</span>`,
                location = `<a href="https://github.com/${userInput.value}/${rep.name}" target= "_blank">Visit</a>`;
                myDiv.innerHTML = name + date + location + stars;
                myDiv.classList.add("repo-box")
                theData.appendChild(myDiv)
            }))
    }else{
        theData.innerHTML = "<h1 class = `empty`>Write The User Name</h1>"
    }
};
// The End