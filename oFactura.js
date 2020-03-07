var factura = {
    nomEmpresa: "antojitos",
    direc : "AV canada 3880",
    tel: "934858747",
    nif: "???",

    cli: {
        nomCli: "jose perez",
        direc: "Av san juan 734, san luis",
        tel: "987465343"

    },
    lisElemt: [
        {
            description: 'descriptioon',
            price: 30,
            cantidad: 3
        },  
        {
            description: 'descriptioon',
            price: 30,
            cantidad: 3
        }
    ],
    iva: 0.34

}

function impTotal(){
    var total = 0;
    factura.lisElemt.forEach( item => total = total + (item.price * item.cantidad))
    //console.log(total);
    return total;
}

function showFacture(){
    var facture = {};
    facture.total = impTotal();
    facture.iva = factura.iva;
    facture.totalIva = (1 + factura.iva) * impTotal();


    //document.getElementById("total").value = "Johnny Bravo";
    document.getElementById("total").innerHTML = facture.totalIva ;
    alert('el monto total es: ' + facture.totalIva);
    return facture;
}

showFacture();
