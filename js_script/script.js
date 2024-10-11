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

        dj_number = dj_number * 5;

        // Display the values
        console.log('DJ number:', dj_number);
    });

    $('#toy-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        let toy_number = $('#toy').val();

        toy_number = toy_number * 3;

        // Display the values
        console.log('toy number:', toy_number);
    });
});