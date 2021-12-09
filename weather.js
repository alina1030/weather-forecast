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
var date = document.querySelector('.date');
var country = document.querySelector('.country');
var feels_like = document.querySelector('.feels_like');
var temp = document.querySelector('.temp');
var temp_max = document.querySelector('.temp_max');
var desc = document.querySelector('.desc');
//var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1abc1a1151cd944f2eab4015c101cbd9')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp_min'];
  var temp_maxValue = data['main']['temp_max'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var feels_likeValue = data['main']['feels_like'];
  var countryValue = data['sys']['country'];
  var dateValue = data['dt'];

  var day = new Date(dateValue*1000);

  country.innerHTML = countryValue;
  name.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue+' '+ ' o'.sup()+'C'+' / '+temp_maxValue+' '+ ' o'.sup()+'C';
  feels_like.innerHTML = feels_likeValue+' '+' o'.sup()+'C';
  date.innerHTML = day.toString();

  // temp_max.innerHTML = temp_maxValue+' '+ ' o'.sup()+'C';

  //input.value ="";

})

.catch(err => alert("Wrong city name!"));
})