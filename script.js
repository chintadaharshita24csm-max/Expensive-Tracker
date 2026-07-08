const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const transactionList = document.getElementById("transactionList");
const balance = document.getElementById("balance");

let totalBalance = 0;

addBtn.addEventListener("click", addTransaction);

function addTransaction() {

    if (desc.value === "" || amount.value === "") {
        alert("Please fill all fields!");
        return;
    }

    const value = Number(amount.value);

    if (type.value === "income") {
        totalBalance += value;
    } else {
        totalBalance -= value;
    }

    balance.textContent = "₹" + totalBalance;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${desc.value} (${type.value}) - ₹${value}</span>
        <button class="delete">Delete</button>
    `;

    transactionList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", function () {

        if (type.value === "income") {
            totalBalance -= value;
        } else {
            totalBalance += value;
        }

        balance.textContent = "₹" + totalBalance;
        li.remove();
    });

    desc.value = "";
    amount.value = "";
}
