angular.module('Game', []).controller('gameCtrl', function($scope, $interval) {
	$scope.att = 1;
	$scope.def = 1;
	$scope.rcv = 1;
	$scope.exp = 0;
	$scope.money = 0;
	$scope.exp_thresh = 10;
	$scope.stam_max = 20;
	$scope.stam_cur = 0;
	$scope.hp = 100;
	$scope.level = 1;
	$scope.percent_gain = 25;

	function recover(){
	if ($scope.stam_cur < $scope.stam_max){
		$scope.stam_cur = $scope.stam_cur + $scope.rcv;
		if ($scope.stam_cur > $scope.stam_max)
			$scope.stam_cur = $scope.stam_max;
		}
	}

	function update(){
		recover();
	}
	//window.setInterval($scope.$apply(update()), 100);
	$interval(update, 100);
});
