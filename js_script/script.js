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
        //const age = $('#age').val();

        dj_number = dj_number * 5;

        // Display the values
        console.log('DJ number:', dj_number);
        //console.log('Age:', age);
    });
});