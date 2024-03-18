document.addEventListener('DOMContentLoaded', function () {

    var clickMeButton = document.getElementById('clickMe');
    clickMeButton.addEventListener('click', function () {
        console.log(window);
        console.log(`11111111111`);

        alert('Button clicked!');
    });
});