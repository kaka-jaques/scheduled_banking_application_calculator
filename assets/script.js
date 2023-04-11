$.ajax({
    type: "GET",
    url: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json",
    headers: {
        Accept: "application/json"
    },
    dataType: "json",
    success: function (response){
        console.log(response.at(-1));
        document.getElementById('selictx').valueAsNumber = response.at(-1).valor
        document.getElementById('selictxtext').append(response.at(-1).data)
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
        console.log(response.at(-1));
        document.getElementById('cditx').valueAsNumber = response.at(-1).valor
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
        console.log('checked');
    }else{
        document.getElementById('capMonth').valueAsNumber = null;
        document.getElementById('capMonth').setAttribute('disabled','');
        console.log('discheked');
    }

}

