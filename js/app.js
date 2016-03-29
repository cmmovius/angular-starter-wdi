"use strict";

(function(){
  angular
  .module("phonebook", [
    // "ui.router"
    // "heroes"
  ]).controller("hero_controller", HeroController);

  function HeroController(){
    var vm = this;
    vm.data = superheroList;
  }
  // .config([
  //   "$stateProvider",
  //   RouterFunction
  // ]);
  //
  // function RouterFunction($stateProvider){
  //   $stateProvider
  //   .state("heroIndex", {
  //     url: "/heroes",
  //     templateUrl: "js/heroes/index.html",
  //     controller: "heroIndexController",
  //     controllerAs: "heroIndexViewModel"
  //   })
  //   .state("heroNew", {
  //     url: "/heroes/new",
  //     templateUrl: "js/heroes/new.html",
  //     controller: "heroNewController",
  //     controllerAs: "heroNewViewModel"
  //   })
  //   .state("heroEdit", {
  //     url: "/heroes/:id/edit",
  //     templateUrl: "js/heroes/edit.html",
  //     controller: "heroEditController",
  //     controllerAs: "heroEditViewModel"
  //   })
  //   .state("heroShow", {
  //     url: "/heroes/:id",
  //     templateUrl: "js/heroes/show.html",
  //     controller: "heroShowController",
  //     controllerAs: "heroShowViewModel"
  //   });
  // }
}());
