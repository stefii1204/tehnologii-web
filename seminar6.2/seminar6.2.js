
document.querySelector("thead tr").bgColor = "blue"


let oddRows = document.querySelectorAll("tbody tr:nth-child(odd)")
for (let row of oddRows) {
    row.bgColor = "violet"
}


let lastRow = document.querySelector("tbody tr:last-child")
if (lastRow) {
    lastRow.bgColor = "green"
}
