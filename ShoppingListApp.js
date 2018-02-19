var app = angular.module("myShoppingList", ['dndLists']); 
app.controller("myCtrl", function($scope, $http) {

  $http.get('List.json')
           .then(function(res){
              $scope.list = res.data;                
            });

    $scope.selected = null;
   
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.list.products.indexOf($scope.addMe) == -1) {
            $scope.list.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }

    $scope.removeprodItem = function (x) {
        $scope.errortext = "";    
        $scope.list.products.splice(x, 1);
    }
        $scope.removeNeedItem = function (x) {
        $scope.errortext = "";    
        $scope.list.NeedMoreNow.splice(x, 1);
    }

        // Model to JSON for demo purpose
    $scope.$watch('list', function(mylist) {
        $scope.listAsJson = angular.toJson(mylist, true);
    }, true);

});
