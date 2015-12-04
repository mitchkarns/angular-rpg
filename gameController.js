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
	$scope.hp_max = 100;
	$scope.level = 1;
	$scope.percent_gain = 25;

	function updateExp(e){
		$scope.exp += e;
		if ($scope.exp >= $scope.exp_thresh){
			$scope.exp -= $scope.exp_thresh;
			$scope.level += 1;
			$scope.exp_thresh += Math.floor($scope.level * $scope.level / 20);
		}
	}

	function recover(){
		if ($scope.hp < $scope.hp_max){
			$scope.hp += $scope.rcv;
			if ($scope.hp > $scope.hp_max)
				$scope.hp = $scope.hp_max;
		}
		
		if ($scope.stam_cur < $scope.stam_max){
			$scope.stam_cur = $scope.stam_cur + $scope.rcv;
			if ($scope.stam_cur > $scope.stam_max)
				$scope.stam_cur = $scope.stam_max;
		}
	}

	//every 100 mils this should update hp and stam
	function update(){
		recover();
	}
	//window.setInterval($scope.$apply(update()), 100);
	$interval(update, 100);
});
