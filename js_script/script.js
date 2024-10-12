/* document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const dj_number = document.getElementById('dj').value;

    // Display the values
    console.log('DJ number:', dj_number);
}); */

$(document).ready(function() {
    $('#dj-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        let dj_number = $('#dj').val();
        let df_fee;

        dj_fee = dj_number * 5;

        // Display the values
        console.log('Thank you for enjoying the service ')
        console.log('DJ number:', dj_number);
        console.log('Total amount:', dj_fee)
    });

    $('#toy-form').on('submit', function(event) {
        event.preventDefault(); 

        
        let toy_number = $('#toy').val();

        toy_number = toy_number * 3;

        console.log('toy number:', toy_number);
    });

    $('#catering-form').on('submit', function(event) {
        event.preventDefault(); 

        let catering_number = $('#catering').val();

        catering_number = catering_number * 2;

        console.log('catering number:', catering_number);
    });

    $('#asian-form').on('submit', function(event) {
        event.preventDefault(); 

        let asian_number = $('#asian').val();

        asian_number = asian_number * 2;

        console.log('asian number:', asian_number);
   
   
    });

    $('#medi-form').on('submit', function(event) {
        event.preventDefault(); 

        let medi = $('#medi').val();

        medi = medi * 2;

        console.log('medi number:', medi);
    });

    $('#cont-form').on('submit', function(event) {
        event.preventDefault(); 

        let cont = $('#cont').val();

        cont = cont * 2;

        console.log('cont number:', cont);
    });
});


let getJSON = async(url) => {
    let response = await fetch(url);
    let JSON = await response.json();
    console.log(JSON + "\n" + "\n");
    console.log(JSON.rainfall);
}


getJSON('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')