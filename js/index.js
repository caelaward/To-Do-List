let btn2=document.querySelector('[data-btn2]')
let input=document.querySelector('[data-input]')
let list=[]

//function create an object from whatevr is being added
function addInput(name, id, date, completed) {
    return {
        name: name,
        id: id,
        createdDate: date,
        completed: completed
    };
}

//adding event listner to push the obj created into the array
btn2.addEventListener('click', function () {
    let maxId = 0;


    const newItem = addInput(input.value, maxId + 1, new Date(), false);
    list.push(newItem);
    updateList();
    addList()
})


//function to store obj in local storage and get the obj from local storage
function updateList() {
    localStorage.setItem('storage', JSON.stringify(list));
    let item = localStorage.getItem('storage');
    // addList();
    
}


function addList() {
    
    updateList()

    let items = document.querySelector(".items");
    //map help us loop through obj.. item= actual obj .. index= the actual index in obj
    let table = list.map((item, index) => {
        return `<tr>
        
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td><input type="checkbox"></td>
        <td><button value=${index} data-delbtn >X</button></td> 
        
        </tr>`;
    });
//joins more than one row together
    items.innerHTML = table.join('');
}


//creating variable to select the table 
let getTable=document.querySelector('table')

//creating funtion to delete
function deleteValue(index) {
    list.splice(index,1)
    updateList()
}

getTable.addEventListener('click',function () {
 if (event.target.classList.contain('data-delbtn')) {
    table.remove()
 }


//    alert('Are you sure you want to delete this?')

} )



