"use strict";

(function(){

  angular.module("wdinstagram", [
  	"ui.router",
  	"ngResource"
  	])
  .config([
  	"$stateProvider",
  	RouterFunction
  	])
  .factory("InstaFactory", [
  	"$resource",
  	InstaFactoryFunction
  	])
  .controller("InstaIndexController", [
  	"InstaFactory",
  	InstaIndexControllerFunction
  	])
  .controller("InstaNewController", [
  	"InstaFactory",
  	"$state",
  	InstaNewControllerFunction
  	])
  .controller("InstaShowController", [
  	"InstaFactory",
  	"$stateParams",
  	InstaShowControllerFunction
  	])

  function RouterFunction($stateProvider) {
  	$stateProvider
  		.state("instaIndex", {
  			url: '/',
  			templateUrl: "js/ng-views/index.html",
            controller: "GrumbleIndexController",
            controllerAs: "vm"
  		})

  	function InstaIndexControllerFunction(){
  		$
  	}
  }





})();
