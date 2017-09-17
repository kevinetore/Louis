$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=enschede,nl&appid=584a8da601379289fbd35050a785e7ea&mode=json&units=metric',
  type: 'GET',
  success: function(res) {
    var data = res['main']['temp']
    var temp = ("" + data).split('.');
    $('.weather').html("<img src='../images/cloud.png'>" + temp[0] + '˚' );
  }
});
