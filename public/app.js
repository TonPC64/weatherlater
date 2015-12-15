moment.locale('th')

angular.module('app', [])
  .controller('AppController', function ($scope, $http) {
    var weather = this
    $scope.data = []

    weather.link = ['http://api.openweathermap.org/data/2.5/forecast/daily?q=prachinburi&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',
      'http://api.openweathermap.org/data/2.5/forecast/daily?id=1610538&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',
      'http://api.openweathermap.org/data/2.5/forecast/daily?id=1613409&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',
      'http://api.openweathermap.org/data/2.5/forecast/daily?id=1616464&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',
      'http://api.openweathermap.org/data/2.5/forecast/daily?id=1607284&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',
      'http://api.openweathermap.org/data/2.5/forecast/daily?id=7510923&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',
      'http://api.openweathermap.org/data/2.5/forecast/daily?id=1606291&mode=json&units=metric&cnt=7&appid=2de143494c0b295cca9337e1e96b00e0',]

    $http.get(weather.link[0]).then(function (response) {
      $scope.data[0] = response.data
    })
    $http.get(weather.link[1]).then(function (response) {
      $scope.data[1] = response.data
    })
    $http.get(weather.link[2]).then(function (response) {
      $scope.data[2] = response.data
    })
    $http.get(weather.link[3]).then(function (response) {
      $scope.data[3] = response.data
    })
    $http.get(weather.link[4]).then(function (response) {
      $scope.data[4] = response.data
    })
    $http.get(weather.link[5]).then(function (response) {
      $scope.data[5] = response.data
    })
    $http.get(weather.link[6]).then(function (response) {
      $scope.data[6] = response.data
    })

    $scope.formatDate = function (timestamp) {
      var day = moment.unix(timestamp)
      return day.format('ll')
    }

    $scope.formatTemp = function (temp) {
      return parseInt(temp)
    }
  })
