var currentDateTime = new Date();
var ano = currentDateTime.getFullYear();
var mes = (currentDateTime.getMonth() + 1);
var data = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(mes < 10) {
  mes = '0' + mes;
}

var dataAmanha = ano + "-" + mes + "-" + date;
var encomendaElem = document.querySelector("#data-encomenda");

encomendaElem.setAttribute("min", dateTomorrow);

