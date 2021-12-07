// // //Complete the Weather API Backend part using openweathermap api
 var button = document.querySelector('.button')
// // var inputValue = document.querySelector('.search-box')
// // var city = document.querySelector('.city')
// // var temp = document.querySelector('.temp')
// // var desc = document.querySelector('.desc')
// // var date = document.querySelector('.date')
// // var hilow = document.querySelector('.hi-low')

// // button.addEventListener('click',function(){
// //     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1abc1a1151cd944f2eab4015c101cbd9')
// // .then(response => response.json())
// // .then(data => {
// //     var cityValue = data['city'];
// //     var tempValue = data['main']['temp'];
// //     var descValue = data['weather'][0]['description'];

// //     city.innerHTML = cityValue;
// //     temp.innerHTML = tempValue;
// //     desc.innerHTML = descValue;
// // })



// // .catch(err => alert("City name not found"))
// })

var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');

var desc = document.querySelector('.desc');
//var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1abc1a1151cd944f2eab4015c101cbd9')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp_min'];
  
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  name.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue+' '+ ' oC';

  //input.value ="";

})

.catch(err => alert("Wrong city name!"));
})