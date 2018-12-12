document.addEventListener("DOMContentLoaded", function () {
    var incrementButton = document.getElementById("Increment");
    var decrementButton = document.getElementById("Decrement");
    var counter = document.getElementById("counter");

   var count = 0;

    // incrementButton.addEventListener('click', function(){
    //     incrementButton.innerHTML = "He said it again!"

    //     count++;

    //     counter.innerHTML = count;
    
    // });
    // decrementButton.addEventListener('click', function(){
    //     decrementButton.innerHTML = "He said it again!"

    //     count--;

    //     counter.innerHTML = count;
    
    // });
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



// axios
//     .get('/api/count')
//     .then(function(response){
//         document.getElementById('count').innerHTML = response.data;
// })
// .catch(function(error){
//     console.log(error);
// })



