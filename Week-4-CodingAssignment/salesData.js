let id = 0;

document.getElementById('sales-btn').addEventListener('click', () => {
    let table = document.getElementById('sales-tbl');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('order-id').value;
    row.insertCell(1).innerHTML = document.getElementById('customer-name').value;
    row.insertCell(2).innerHTML = document.getElementById('product').value;
    row.insertCell(3).innerHTML = document.getElementById('category').value;
    row.insertCell(4).innerHTML = document.getElementById('order-date').value;
    row.insertCell(5).innerHTML = document.getElementById('shipped-date').value;
    row.insertCell(6).innerHTML = document.getElementById('quantity').value;
    row.insertCell(7).innerHTML = document.getElementById('price').value;
    row.insertCell(8).innerHTML = document.getElementById('total-sale').value;
    row.insertCell(9).innerHTML = document.getElementById('salesperson').value;
    let actions = row.insertCell(10);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('order-id').value = '';
    document.getElementById('customer-name').value = '';
    document.getElementById('product').value = '';
    document.getElementById('category').value = '';
    document.getElementById('order-date').value = '';
    document.getElementById('shipped-date').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
    document.getElementById('total-sale').value = '';
    document.getElementById('salesperson').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-danger';
    btn.id = id;
    btn.innerHTML = 'Delete Sales Data';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
// //Function to clear form - Clears form but does not wait for click... :-(
// function myFunction() {
//     btn.onclick = () => {
//         let elementToReset = document.getElementById('sales-data-form');
//         elementToReset.reset();
//     }
// }