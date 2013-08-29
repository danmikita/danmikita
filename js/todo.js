function FoodController($scope) {
  $scope.foods = [
    {name:'Apples', done:false},
    {name:'Blueberries', done:false},
    {name:'Carrots', done:false},
    {name:'Eggplant', done:false},
    {name:'Iceberg Lettuce', done:false},
    {name:'Plums', done:false},
    {name:'Zuchini', done:false}];
 
  $scope.addNewFood = function() {
    $scope.foods.push({name:$scope.foodName, done:false});
    $scope.foodName = '';
  };
}