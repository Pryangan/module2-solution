(function (){
  'use strict';

  angular.module('Shopping_List_Check_Off', [])
  .controller('ToBuy',ToBuy)
  .controller('AlreadyBought',AlreadyBought)
  .service('Shopping_List_Check_Off_Service',Shopping_List_Check_Off_Service);

  ToBuy.$inject = ['Shopping_List_Check_Off_Service'];
  function ToBuy(Shopping_List_Check_Off_Service){
    var showList = this;

    showList.items = Shopping_List_Check_Off_Service.getItems();
    showList.moves = function (q,n,itemIndex) {
        Shopping_List_Check_Off_Service.movesItem(q,n,itemIndex);
    };
  }

  AlreadyBought.$inject = ['Shopping_List_Check_Off_Service'];
  function AlreadyBought(Shopping_List_Check_Off_Service){
    var showBoughtList = this;

    showBoughtList.boughtitems = Shopping_List_Check_Off_Service.getBoughtitems();
  }

function Shopping_List_Check_Off_Service() {
  var service = this;

  var ToBuy_items = [
    {
      name : 'Milk',
      quantity : 10
    },
    {
      name : 'Tea',
      quantity : 4
    },
    {
      name : 'Orange',
      quantity : 5
    },
    {
      name : 'cookies',
      quantity : 2
    },
    {
      name : 'Pizza',
      quantity : 3
    }
  ];

  var boughtList = [];

  service.movesItem = function (quantity,itemname,itemIdex) {
    var item = {
      name: itemname,
      quantity: quantity
    };
    boughtList.push(item);
    ToBuy_items.splice(itemIdex,1);
  };

  service.getItems = function () {
    return ToBuy_items;
  };

  service.getBoughtitems = function () {
    return boughtList;
  };
}
})();
