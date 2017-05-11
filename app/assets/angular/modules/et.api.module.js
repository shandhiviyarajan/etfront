/**
 * @project - Easy trades
 * @date - April 28 2017
 * @type - Javacrit / JQuery/ Angular
 * @author - Shan Dhiviyajan <prashasoft@gmail.com>
 */

/*
 API Service & Factory
 ----------------------------------------------------------------------------------------------------------------- */

(function ($, angular) {
    "use strict";

    angular.module("etAPI", [
        'etCore',
        'ngResource',
        'ngCookies'
    ]);

    angular.module("etAPI")
        .config(config);
    config.$inject = ['$httpProvider'];
    function config($httpProvider){
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }

    /* Authentication factory
     --------------------------------------------------------------------------- */
    angular.module("etAPI")
        .factory("AuthService", AuthService);
    AuthService.$inject = ['$http', '$cookieStore', '$rootScope', 'RESOURCE_URL'];

    function AuthService($http, $cookieStore, $rootScope, RESOURCE_URL) {

        var AuthService = {};

        /* Authentication Login / Sign In
         --------------------------------------------------------------------------- */
        AuthService.Login = function (email, password, callback) {
            $http({
                url: RESOURCE_URL.LOGIN,
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data: "Email=" + email + "&" + "Password=" + password
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });

        };

        /* Authentication set token and username and cookie object
         ---------------------------------------------------------------------------- */
        AuthService.SetCredentials = function (user) {
            //Set user data to $rootScope
            $rootScope.globals = {
                current_user: {
                    username: user.username,
                    token: user.token
                }
            };

            //Set $http header with JWT auth token
            //not compulsory
           // $http.defaults.headers.common['Authentication'] = 'JWT ' + user.token;

            //Set cookie
            $cookieStore.put('globals', $rootScope.globals);

        };

        /* Clear credentials
         ---------------------------------------------------------------------------- */
        AuthService.ClearCredentials = function () {

            $http({

                url: RESOURCE_URL.SIGN_OUT,
                method: 'GET',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            }).then(function (success) {
                $rootScope.globals = {
                    current_user: {
                        username: null,
                        token: null
                    }
                };
                console.log($rootScope);
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
                AuthService.isAuthenticated();

            }, function (error) {

            });
        };

        /* Create new user
         ---------------------------------------------------------------------------- */
        AuthService.CreateUser = function (user, callback) {
            $http({
                // url: "http://easytrades.herokuapp.com/signup",
                url: RESOURCE_URL.SIGN_UP,
                method: "POST",
                data: "Email=" + user.email + "&" + "Password=" + user.password + "&" + "UserName=" + user.username + "&" + "Type=" + user.type,
                headers: {
                    "Content-type": "text/json"
                }

            }).then(function (success, status, headers, config) {
                callback(success);
            }, function (error, status, headers, config) {
                callback(error);
            });

        };

        /* is Authenticated
         --------------------------------------------------------------------------- */
        AuthService.isAuthenticated = function () {

            if ($rootScope.globals.current_user.token == "" || $rootScope.globals.current_user.token == undefined || $rootScope.globals.current_user.token == null || $cookieStore.get('globals').current_user.token == "" || $cookieStore.get('globals').current_user.token == undefined || $cookieStore.get('globals').current_user.token == null) {
                console.log("isAuthenticated = false");
                $rootScope.isAuthenticated = false;
                return false;
            }

            //Original Compare with JWT token
            if ($rootScope.globals.current_user.token != "" || $rootScope.globals.current_user.token != undefined || $rootScope.globals.current_user.token != null || $cookieStore.get('globals').current_user.token != "" || $cookieStore.get('globals').current_user.token != undefined || $cookieStore.get('globals').current_user.token != null) {

                $rootScope.isAuthenticated = true;
                return true;
            }

        };
        return AuthService;
    }

    /* Employee factory
     ------------------------------------------------------------------------------- */
    angular.module('etAPI')
        .factory('ServiceEmployee', ServiceEmployee);
    ServiceEmployee.$inject = ['$http', '$cookieStore', '$rootScope', 'RESOURCE_URL','$httpProvider'];
    function ServiceEmployee($http, $cookieStore, $rootScope, RESOURCE_URL,$httpProvider) {
        var ServiceEmployee = {};
        var responseJobs = {};

        //$httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.common['Authentication'] = 'JWT ' + user.token;

        /* Get profile user - Employee
         --------------------------------------------------------------------------- */
        ServiceEmployee.GetProfileEmployee = function (callback) {

            $http({
                url: RESOURCE_URL.EMPLOYEE.MY_PROFILE_EMPLOYEE,
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
        };

        /* Get profile other user - Employee
         --------------------------------------------------------------------------- */
        ServiceEmployee.GetProfileOthersEmployee = function (username, type, callback) {

            $http({
                url: RESOURCE_URL.EMPLOYEE.MY_PROFILE_EMPLOYEE_OTHERS,
                //url: 'http://easytrades.herokuapp.com/' + type + '/' + username + '/profile',
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
        };

        /* Update profile user - Employee
         --------------------------------------------------------------------------- */

        ServiceEmployee.UpdateProfile = function (username, type, callback) {

            $http({
                url: RESOURCE_URL.EMPLOYEE.UPDATE_PROFILE,
                //url: 'http://easytrades.herokuapp.com/' + type + '/' + username + '/profile',
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
        };

        /* Add location - Employee
         --------------------------------------------------------------------------- */
        ServiceEmployee.AddLocation = function (callback) {

            $http({
                // url: 'http://easytrades.herokuapp.com/employee/' + $rootScope.globals.current_user.username + '/location',
                url: RESOURCE_URL.EMPLOYEE.ADD_LOCATION,
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }


            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
        };

        /* View jobs - Employee
         ------------------------------------------------------------------------------- */
        ServiceEmployee.ViewJobs = function (callback) {
            $http({
                url: RESOURCE_URL.EMPLOYEE.VIEW_JOBS,
                method: "GET",
                headers: {
                    'Content-Type': "text/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
            callback(responseJobs);
        };

        /* View single jobs - Employee
         ------------------------------------------------------------------------------- */

        ServiceEmployee.ViewSingleJob = function (job_id, callback) {
            $http({
                url: RESOURCE_URL.EMPLOYEE.VIEW_JOB_BY_ID,
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
        };

        /* Apply for a job - Employee
         --------------------------------------------------------------------------------- */
        ServiceEmployee.ApplyJob = function (job_id, callback) {

            $http({
                url: 'http://easytrades.herokuapp.com/employee/apply/' + job_id + '/true',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (success) {
                callback(success);
            }, function (error) {
                callback(error);
            });
        };

        /* View time sheet - Employee
         ------------------------------------------------------------------------------- */
        var responseTimesheet = {};
        ServiceEmployee.Timesheets = function (callback) {
            $http({
                url: 'http://easytrades.herokuapp.com/employee/' + $rootScope.globals.current_user.username + '/timesheets',
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                responseTimesheet = success;
            }, function (error) {
                responseTimesheet = error;
            });

            callback(responseTimesheet);
        };

        /* View all time sheets - Employee
         ------------------------------------------------------------------------------- */
        var responseAllTimesheets = {};
        ServiceEmployee.Timesheets = function (callback) {
            $http({
                url: 'http://easytrades.herokuapp.com/employee/timesheets',
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(function (success) {
                responseAllTimesheets = success;
            }, function (error) {
                responseAllTimesheets = error;
            });

            callback(responseAllTimesheets);
        };

        return ServiceEmployee;
    }

    /* Employer factory
     ------------------------------------------------------------------------------- */


})(jQuery, angular);