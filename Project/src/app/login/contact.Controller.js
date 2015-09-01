(function() {
  'use strict';

  var app= angular.module('template')


  app.factory('Person', function() {
     function Person(first, last, email) {
      this.fname = '';
      this.lname = '';
      this.email = '';


      this.fname = first || this.fname;
      this.lname = last || this.lname;
      this.email = email || this.email;
     }

     return Person;
  })

  app.service('AdContactService', function() {
  var existinglist=[];

  var addContact = function(person) {
    existinglist.push(person);
  }
  var getlist=function(){
    return existinglist;
  }
  return{
    addContact: addContact,
    getlist: getlist
  };
});

  app.controller('ContactController', function (Person, AdContactService) {
    var self = this;

    self.person= new Person();

 self.list = AdContactService.addContact(self.person); 

    self.onSubmit = function() {
      if (self.myForm.$valid) {
    
        console.log('Submitted!')
      } else {
        console.log('Invalid Form')
      }
    };

  });

})();

