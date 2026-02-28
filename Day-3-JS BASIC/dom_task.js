let table=document.createElement("table")
table.style.border="3px solid black"

for(let i=0;i<5;i++){
    const row=document.createElement("tr")

    for(let j=0;j<5;j++){
        const col=document.createElement("td");
        col.textContent="task"
        row.appendChild(col)
        col.style.border="2px solid black"
    }
    table.appendChild(row)
    row.style.border="2px solid black"
}

document.body.appendChild(table)