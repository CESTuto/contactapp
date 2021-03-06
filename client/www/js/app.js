var module = angular.module('app', ["ionic"]);

module.service('ContactService', function () {

    var uid = 1;
    
  
    var contacts = [{
        'id': 0,
        'name': 'Sawan',
		'lname': 'Kumar',
		'phone': 9827109369,
        'email': 'sawankumarbundelkhandi@gmail.com'
            
    }];
    

    this.save = function (contact) {
        if (contact.id == null) {
          
            contact.id = uid++;
            contacts.push(contact);
        } else {
            
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }

    }


    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }

    }
    

    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }


    this.list = function () {
        return contacts;
    }
});

module.controller('ContactController', function ($scope, ContactService) {

    $scope.contacts = ContactService.list();
    // Initialize scope object
    $scope.newcontact = {};

    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
})
