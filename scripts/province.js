// province.js - province service passed to MainController

(function(){

    'use strict';

    angular
        .module('orderApp')
        .factory('province', province);
        
        function province() {
            function getProvinces() {
                return [
                    {
                        "name": "Portland, OR",
                        "value":"Portland, OR"
                    },
                    {
                        "name":"Santa Barbara, CA",
                        "value":"Santa Barbara, CA"
                    },
                    {
                        "name":"Ventura, CA",
                        "value":"Ventura, CA"
                    },
                    {
                        "name":"Los Angeles, CA",
                        "value":"Los Angeles, CA"
                    },
                    {
                        "name":"San Francisco, CA",
                        "value":"San Francisco, CA"
                    },
                    {
                        "name":"Northwest Territories",
                        "value":"northwest_territories"
                    },
                    {
                        "name":"Nova Scotia",
                        "value":"nova_scotia"
                    },
                    {
                        "name":"Munich, Germany",
                        "value":"Munich, Germany"
                    },              
                    {
                        "name":"Austin, TX",
                        "value":"Austin, TX"
                    },
                    {
                        "name":"Prince Edward Island",
                        "value":"prince_edward_island"
                    },
                    {
                        "name":"London, UK",
                        "value":"London, UK"
                    },
                    {
                        "name":"Mordor, Mordor",
                        "value":"Mordor, Mordor"
                    },
                    {
                        "name":"The Moon",
                        "value":"The Moon"
                    },
                ];
            }

            return {
                getProvinces: getProvinces
            }
        }
        
})();