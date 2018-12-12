document.addEventListener("DOMContentLoaded", function () {
    var incrementButton = document.getElementById("Increment");
    var decrementButton = document.getElementById("Decrement");
    var counter = document.getElementById("counter");
    
    incrementButton.addEventListener('click', function(){
        axios.get('/api/increment').then(function(response){
            counter.innerHTML = response.data;
        });
    });
    decrementButton.addEventListener('click', function(){
        axios.get('/api/decrement').then(function(response){
            counter.innerHTML = response.data;
        });
    });
});







