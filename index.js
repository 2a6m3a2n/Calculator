let main = document.getElementById("root")
const container = document.createElement("div")
container.classList.add("container")

const upbox = document.createElement("div")
upbox.classList.add("upbox")
container.append(upbox)

const downbox = document.createElement("div")
downbox.classList.add("downbox")
container.append(downbox)

const firstbox = document.createElement("div")
downbox.append(firstbox)
firstbox.classList.add("firstbox")

const secondbox = document.createElement("div")
downbox.append(secondbox)
secondbox.classList.add("secondbox")

const cal = document.createElement("button")
cal.innerText= "="

const empty = document.createElement("button")
empty.innerText = "C"

main.append(container)

function createbtnelementInput(value) {
    const btn = document.createElement("button")
    btn.id = value;
    btn.value = value;
    btn.innerHTML = value;
    btn.classList.add("btn")
    firstbox.append(btn)
    btn.addEventListener("click", () => {
        console.log(btn.value = value)
        upbox.innerText = upbox.innerText + btn.value ;
    })
}

function createbtnelementOP(value) {
    const btn = document.createElement("button")
    btn.id = value;
    btn.value = value;
    btn.innerHTML = value;
    btn.classList.add("btn")
    secondbox.append(btn)
    btn.addEventListener("click", () => {
        console.log(btn.value = value)
        upbox.innerText = upbox.innerText + btn.value ;
    })   
}

for (let i = 9; i >= 0; i--) {
    createbtnelementInput(i)
}

firstbox.append(cal)
firstbox.append(empty)


let arr = ["+", "-", "*", "/"]
arr.forEach((item) => createbtnelementOP(item))


cal.addEventListener('click', ()=>{
    upbox.innerText = eval(upbox.innerText)
})

empty.addEventListener('click', ()=>{
    upbox.innerText= ""
})