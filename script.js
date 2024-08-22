// import {useState} from "react";
// export function ToDoList(){
//     const[inputValue,setInputValue]=useState(""); // destructuring
//     const[list,setList] = useState([
//         {label:"First", checked:false},
//         {label:"Second", checked:false},
//         {label:"Third", checked:false},
//     ]);

//     const addItem=()=>{
//         setList([...list, //previous 
//             {label:inputValue,checked:false}, //new item
//             ]);
//     };
//     setInputValue("");
// };

//     const removeItem=(index)=>{                         // filter
//         setList(list.filter((listItem,i) => i != index));
//     };

//     const changeCheckedState = (index,val)=>{
//         setList(
//             list.map((listItem,idx)=>idx !== index ?listItem:{...listItem,checked:val})
//     );
// };

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();