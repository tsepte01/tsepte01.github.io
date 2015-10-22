//checking function
checkingFunc = function() {
if(checkb.checked) {
this.parentNode.classList.add("Completed");
}
else {
    this.parentNode.classList.remove("Completed");             
 }        
localSave()
}  


//Addtask Function described
Addtask = function () {
//creating li
item = document.createElement('li');
words = document.querySelector("#input");
wordsval = words.value;
//creating textnode
inneritem = document.createTextNode(wordsval)
//appending textnode to li            
item.appendChild(inneritem)
//appending li to ul  
ul = document.querySelector('#list');
ul.appendChild(item)    
//classifying li    
selectval = document.querySelector('#Selection').value;
item.className = selectval;
//creating checkbox input
checkb = document.createElement('input');
checkb.setAttribute("type", "checkbox");
checkb.id = "checkbox";
checkb.onclick = checkingFunc;
//appending checkbox to li
item.appendChild(checkb)
//calling treeBranch function 
treeBrach(wordsval,selectval);  
//this is for emptying the textbox
words.value = "";
//saving to localStorage
localSave()
}

   

localSave = function () {
//creating an array
repoarray = []
//adding the array as a variable
var repoarray =[]
//function that adds stuff to the array
var i
allLi = document.querySelectorAll('li');
for(i=0; i < allLi.length; i++) {
if (! allLi[i].classList.contains("completed")) {
    repoarray.push(allLi[i].innerText);
}
}
//converting and adding the array to local storage
localStorage.setItem("repo",JSON.stringify(repoarray))
}
    

//Recovering Infor from localStorage
repoRecovery = function () {
allLi = document.querySelectorAll('li');
newitem = JSON.parse(localStorage.getItem('repo'))
for(i=0; i< allLi.length; i++) {
    treeBrach(allLi[i],"Medium-P");
     
}
}
//This must be called from addTask and recovery infor from local Save
    treeBrach = function(wordsval, selectval) {
    licontainer = document.querySelector('#list');
    bornagainli = document.createElement('li');
    bornagainli.className = selectval;
    checkb = document.createElement('input');
    checkb.setAttribute = ("type","checkbox");
    checkb.onclick = checkingFunc;
    inneritem = document.createTextNode(wordsval);
    bornagainli.appendChild(checkb);
    bornagainli.appendChild(inneritem);
    licontainer.appendChild(bornagainli);
    }
