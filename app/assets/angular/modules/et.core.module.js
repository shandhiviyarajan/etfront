(function ($, angular) {
    'use strict';

    angular.module('etCore', []);
    angular.module('etCore')
        .constant('RESOURCE_URL',{
           LOGIN:'/curl/login',
            MY_PROFILE_EMPLOYEE:'/curl/my-profile/employee'
        })

})(jQuery, angular);
// cdickson123@gmail.com