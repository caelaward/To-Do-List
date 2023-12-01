let btn2=document.querySelector('[data-btn2]')
let input=document.querySelector('[data-input]')
b  =1 
c = new Date();
d = false
let list=[]

btn2.addEventListener('click', function () {
    let maxId = 0;


    const newItem = AddInput(input.value, maxId + 1, new Date(), false);
    list.push(newItem);
    updateList();
    addList()
})



function AddInput(name, id, date, completed) {
    return {
        name: name,
        id: id,
        createdDate: date,
        completed: completed
    };
}

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
let getTable=document.querySelector('table')
function deleteValue(index) {
    list.splice(index,1)
    // updateList()
}

getTable.addEventListener('click',function () {
   
    deleteValue()

} )



