function newPrice(){
    var price2 = document.getElementById('price').value;
    var discount2 = document.getElementById('discountAmount').value;

    var final = price2 - (price2 * discount2 / 100);

    document.getElementById('demo').innerHTML = final;
}