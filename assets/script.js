var taxaSelic;
var taxaCdi;

$.ajax({
    type: "GET",
    url: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json",
    headers: {
        Accept: "application/json"
    },
    dataType: "json",
    success: function (response){
        taxaSelic = response.at(-1).valor;
        document.getElementById('selictx').valueAsNumber = taxaSelic * 100;
        document.getElementById('selictxtext').append(response.at(-1).data);
    },
    error: function(error){
        console.log(error);
    }
});

$.ajax({
    type: "GET",
    url: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados/ultimos/1?formato=json",
    headers: {
        Accept: "application/json"
    },
    dataType: "json",
    success: function (response){
        taxaCdi = response.at(-1).valor;
        document.getElementById('cditx').valueAsNumber = taxaCdi;
        document.getElementById('cditxtext').append(response.at(-1).data)
    },
    error: function(error){
        console.log(error);
    }
});

function monthlyApp(){

    checkbox = document.getElementById('monthlyAppCheck');

    if(checkbox.checked){
        document.getElementById('capMonth').removeAttribute('disabled');
    }else{
        document.getElementById('capMonth').valueAsNumber = null;
        document.getElementById('capMonth').setAttribute('disabled','');
    }

}

