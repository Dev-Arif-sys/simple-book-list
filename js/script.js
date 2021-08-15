
// getting elements

var addBtn= document.getElementById("add-book-btn");
let bookInput= document.getElementById("book-input");
let authorInput= document.getElementById("author-input");
let yearInput=document.getElementById("year-input");
let table=document.getElementById('table-data')

// adding book on the table

addBtn.onclick=()=>{
    if(bookInput.value==""||authorInput.value==""||yearInput.value==""){
        alert("please fill up all the field")
    }else{

    //  creating table row

     let tr=document.createElement("tr");
     tr.setAttribute("title","double click to delete")
     let td=document.createElement("td");
         td.innerText=bookInput.value;
     let tdTwo=document.createElement("td");
         tdTwo.innerText=authorInput.value;

     let tdThree= document.createElement("td");
         tdThree.innerText=yearInput.value;
         
        //  appneding elements
        
         tr.append(td,tdTwo,tdThree)
         table.appendChild(tr);

         authorInput.value="";
         bookInput.value="";
         yearInput.value="";
         removeBook(tr);
    }

         
}


// remove book bt dbl click

function removeBook(tr){
    let parent= tr.parentElement
     parent.ondblclick=(e)=>{
      e.target.parentElement.parentElement.removeChild(e.target.parentElement)
 }
}