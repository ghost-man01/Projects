const myLeads = []
let inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteEl = document.getElementById("delete-el")

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromStorage) {
    myLeads = leadsFromStorage
    renderLeads()
}



function renderLeads() {
    
    let listItems = ""
    for(let i=0; i<myLeads.length; i++) {
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        listItems += `<li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>`
    }
    
    ulEl.innerHTML = listItems
}
deleteEl.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})