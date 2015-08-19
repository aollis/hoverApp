// scripts/MainController.js

(function() {

	'use strict';

	angular
		.module('orderApp')
		.controller('MainController', MainController);

	function MainController(province) {

		var vm = this;

	// model object referenced in index.html

    	vm.rental = {};
    
    	vm.rentalFields = [
	        {
	            key: 'first_name',
	            type: 'input',
	            templateOptions: {
	                type: 'text',
	                label: 'First Name',
	                placeholder: 'Enter your first name',
	                required: true
	            }
	        },
	        {
	            key: 'last_name',
	            type: 'input',
	            templateOptions: {
	                type: 'text',
	                label: 'Last Name',
	                placeholder: 'Enter your last name',
	                required: true
	            }
	        },
	        {
	            key: 'email',
	            type: 'input',
	            templateOptions: {
	                type: 'email',
	                label: 'Email address',
	                placeholder: 'Enter email',
	                required: true
	            }
	        },

	        {
		        key: 'under25',
		        type: 'checkbox',
		        templateOptions: {
		            label: 'Are you under 25?',
		        },

		        hideExpression: '!model.email'
    		},
    		{
		        key: 'province',
		        type: 'select',
		        templateOptions: {
		            label: 'Province/Territory',
		            options: province.getProvinces()
		        },
		        hideExpression: '!model.email'
   			},
    		{
		        key: 'insurance',
		        type: 'input',
		        templateOptions: {
		            label: 'Insurance Policy Number',
		            placeholder: 'Enter your insurance policy number'
		        },
	        	hideExpression: '!model.under25 || !model.province',
    		},

    		{
		        key: 'license',
		        type: 'input',
		        templateOptions: {
		            label: 'Driver\'s License Number',
		            placeholder: 'Enter your drivers license number'
		        },
		        hideExpression: '!model.province',
		        validators: {
		            // Checks whether the driver's license
		            // number that the user enters is valid or not

		            driversLicense: function($viewValue, $modelValue, scope) {
		                var value = $modelValue || $viewValue;
		                if(value) {
		                    return validateDriversLicence(value)
		                }
		           }
		        }
		    }

	    ];

    function validateDriversLicence(value) {
        return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
    }
    
	}

})();