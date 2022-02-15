const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  document.getElementById("buyer-info").innerText = buyerDetails.value;
  buyerDetails.value = "";
});


const addProductBtn = document.getElementById("add-details-btn");

addProductBtn.addEventListener("click", function () {
  const infoTable = document.getElementById("info-table");
  const itemName = document.getElementById("item-name-input");
  const itemPrice = document.getElementById("item-price-input");
  const itemQuantity = document.getElementById("item-quantity-input");

  if (
    itemName.value == "" ||
    itemPrice.value < 0 ||
    itemQuantity.value < 0 ||
    itemPrice.value == "" ||
    itemQuantity.value == ""
  ) {
    console.log("sorry");
    return;
  }

  {
    /* <tr>
 <th >1</th>
 <td>Mark</td>
<td>Otto</td>
<td class='item-total'>@mdo</td>
</tr> */
  }

  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

  //   const tr = document.createElement("tr"); //<tr></tr>
  const tr = element("tr");
  const th = element("th");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  td3.classList.add("item-total");
  th.innerText = itemName.value; //<th >onion</th>
  td1.innerText = itemPrice.value; //<th >1</th>
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3); //<td class="item-total">35</td>
  infoTable.appendChild(tr);
  totalCalculation();
});