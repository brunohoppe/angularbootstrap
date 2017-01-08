angular.module('myApp', [])
    .controller('myController', function($scope, $timeout) {
        $timeout(function() {
            $scope.lista1 = [];
            $scope.lista1.push({
                name: 'Bruno',
                codigo: 1
            });
            $scope.lista1.push({
                name: 'Bruno Hoppe Botelho Campos huhuhu',
                codigo: 2
            });
            $scope.lista1.push({
                name: 'Helllo',
                codigo: 3
            });
            $scope.lista1.push({
                name: 'World',
                codigo: 4
            });
        }, 2000);


        $timeout(function() {
            $scope.lista2 = [];
            $scope.lista2.push({
                name: 'nrubo',
                codigo: 1
            });
            $scope.lista2.push({
                name: 'Bruno',
                codigo: 2
            });
            $scope.lista2.push({
                name: 'KKKK',
                codigo: 3
            });
            $scope.lista2.push({
                name: 'World',
                codigo: 4
            });
        }, 3000);

        $timeout(function() {
            $scope.lista1 = [];
            $scope.lista1.push({
                name: 'Brunohausuhahushuahusauh',
                codigo: 1
            });
            $scope.lista1.push({
                name: 'Bruno',
                codigo: 2
            });
            $scope.lista1.push({
                name: 'Helllo',
                codigo: 3
            });
            $scope.lista1.push({
                name: 'World',
                codigo: 4
            });
        }, 4000);

        function fib(n) {

            if (n === 0)
                return 0;

            if (n === 1)
                return 1;

            return fib(n - 2) + fib(n - 1);
        };
        //Memoization
        function fibMemo(n, memo) {

        	memo = memo || {};


            if (memo[n])
                return memo[n];

            if (n <= 1)
                return 1;

            return memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);
        }
        //Common
        function fibPerformace(n) {
            var fibArr = [];
            fibArr[0] = 0;
            switch (n) {
                case 1:
                    fibArr[1] = 1;
                    break;
                case 0:
                    break;
                default:
                    fibArr[1] = 1;
                    for (var i = 2; i <= n; i++) {
                        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
                    }
                    break;
            }
            return fibArr;
        }

        $scope.resultado = [];
        // Only Recursivity
        $scope.getFib = function getFib(n) {
            for (var i = 0; i <= n; i++) {
                // $scope.resultado[i] = fib(i);
                $scope.resultado[i] = fibMemo(i);


            }
            // $scope.resultado = fibPerformace(n);
        };


    });