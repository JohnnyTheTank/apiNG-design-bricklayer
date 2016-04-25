"use strict";

angular.module('jtt_aping_design_bricklayer', [])
    .controller('apingBricklayerDesignController', ['$scope', function ($scope) {

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });
    }]);