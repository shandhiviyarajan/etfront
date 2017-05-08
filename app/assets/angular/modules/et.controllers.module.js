/**
 * @project - Easy trades
 * @date - April 28 2017
 * @type - Javacrit / JQuery/ Angular
 * @author - Shan Dhiviyajan <prashasoft@gmail.com>
 */

/*
 Controllers
 --------------------------------------------------------------------------------------------------------------- */

(function ($, angular) {

    'use strict';
    angular.module('etControllers', ['etAPI', 'ngCookies']);

    /**
     * Main Controller
     * ------------------------------------------------------------------------------------------ */
    angular.module('etControllers')
        .controller('ngMainController', ngMainController);
    ngMainController.$inject = ['$scope', '$rootScope', 'AuthService', '$cookieStore', '$state'];

    function ngMainController($scope, $rootScope, AuthService, $cookieStore, $state) {
        var Main = this;
        console.log("Main Controller");


        $rootScope.$watch('isAuthenticated', function (nv, ov) {
            console.log(nv);
        }, true);


        /**
         * User Logout
         *---------------------------------------------------------------------------------------- */
        Main.signOut = function () {
            AuthService.ClearCredentials();
            $state.go('home');

        };

    }


    /**
     * Home Controller
     * ------------------------------------------------------------------------------------------ */
    angular.module('etControllers')
        .controller("ngHomeCtrl", ngHomeCtrl);
    ngHomeCtrl.$inject = ['$scope'];
    function ngHomeCtrl($scope) {
        console.log("Home Controller");
    }


    /**
     * Employee Login Controller
     * ------------------------------------------------------------------------------------------ */

    angular.module('etControllers')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$scope', '$rootScope', 'AuthService', '$state'];
    function LoginController($scope, $rootScope, AuthService, $state) {
        console.log("Employee login controller");
        /* User login
         ---------------------------------------------------------------------------------------- */
        var Login = this;
        Login.email = "nuwansameerait@gmail.com";
        Login.password = "test123";
        Login.login = function () {
            AuthService.Login(Login.email, Login.password, function (response) {
                console.log(response);
                if (response.data) {
                    var LoggedUser = {
                        username: response.data.username,
                        token: response.data.token
                    };
                    //Set credentials//
                    AuthService.SetCredentials(LoggedUser);

                    //Redirect to my profile//
                    $state.go("myProfile");
                } else {
                        console.log("error");
                }
            });
        }
    }

    /**
     * Register - Employee Controller
     * ------------------------------------------------------------------------------------------ */

    angular.module('etControllers')
        .controller('CreateEmployeeController', CreateEmployeeController);
    CreateEmployeeController.$inject = ['$scope', 'AuthService'];
    function CreateEmployeeController($scope, AuthService) {

        var Register = this;
        Register.error_message = "";
        Register.success_message = "";

        /* User register employee
         ---------------------------------------------------------------------------------------- */
        Register.register = function () {
            Register.user = {
                username: Register.username,
                email: Register.email,
                type: "employee",
                password: Register.password
            };
            AuthService.CreateUser(Register.user, function (response) {
                if (response.data.error.message) {
                    Register.error_message = response.data.error.message;
                } else {
                    console.log(response);
                }
            });
        }

    }

    /**
     * Register - Employer Controller
     * ------------------------------------------------------------------------------------------ */

    angular.module('etControllers')
        .controller('CreateEmployerController', CreateEmployerController);
    CreateEmployerController.$inject = ['$scope', 'AuthService'];

    function CreateEmployerController($scope, AuthService) {

        var Register = this;
        Register.error_message = "";
        Register.success_message = "";

        /* User register employer
         ---------------------------------------------------------------------------------------- */
        Register.register = function () {
            Register.user = {
                username: Register.username,
                email: Register.email,
                type: "employer",
                password: Register.password
            };
            AuthService.CreateUser(Register.user, function (response) {

                if (response.data.error.message) {
                    Register.error_message = response.data.error.message;
                } else {
                    console.log(response);
                }
            });
        }
    }


    /**
     * My Profile Employee Controller
     * ------------------------------------------------------------------------------------------ */
    angular.module('etControllers')
        .controller('MyProfileEmployeeController', MyProfileEmployeeController);
    MyProfileEmployeeController.$inject = ['$scope', '$state','$stateParams', 'AuthService', 'ServiceEmployee'];

    function MyProfileEmployeeController($scope, $state,$stateParams, AuthService, ServiceEmployee) {
        console.log("My profile controller");
        var Profile = this;
        Profile.user = {};
        Profile.locations = {};
        Profile.areas = {};
        Profile.other_user = {};

        Profile.ApplicantID = $stateParams.ApplicantID;





        /** Redirect non authenticated user to home / sign in
         ------------------------------------------------------------------------------------------------------- */
        // if (!AuthService.isAuthenticated()) {
        //     $state.go("home");
        // };

        /** Get profile user - employee
         ------------------------------------------------------------------------------------------------------- */
        if (AuthService.isAuthenticated()) {
            ServiceEmployee.GetProfileEmployee(function (user) {
                Profile.user = user.data;
            });
        }
        ;

        /** Get profile other user
         ------------------------------------------------------------------------------------------------------- */
        Profile.getOtherUser = function (username) {
            if (AuthService.isAuthenticated()) {
                ServiceEmployee.GetProfileOthers(username, Profile.type, function (user) {
                    Profile.other_user = user;
                });
            }
        };

        Profile.update = function () {
            if (AuthService.isAuthenticated()) {
                ServiceEmployee.UpdateProfile(function (user) {

                });
            }
        };

        /** Add Location
         ------------------------------------------------------------------------------------------------------- */
        Profile.addLocation = function () {
            if (!AuthService.isAuthenticated()) {
                ServiceEmployee.AddLocation(function (response) {
                    console.log(Profile.locations);
                    console.log(Profile.areas);
                });
            }

        }


    }

    /**
     * Employee Jobs Controller
     * ------------------------------------------------------------------------------------------ */

    angular.module('etControllers')
        .controller('EmployeeJobsController', EmployeeJobsController);
    EmployeeJobsController.$inject = ['$scope', '$state','$stateParams', 'AuthService', 'ServiceEmployee'];
    function EmployeeJobsController($scope, $state,$stateParams, AuthService, ServiceEmployee) {

        var Employee = this;
        Employee.jobs = {};


        /** View jobs
         ------------------------------------------------------------------------------------------ */
            if (!AuthService.isAuthenticated()) {
                ServiceEmployee.ViewJobs(function (response) {
                    Employee.jobs = response.data;
                });
            }

    }

    /**
     * Employee Single Job Controller
     * ------------------------------------------------------------------------------------------ */

    angular.module('etControllers')
        .controller('EmployeeViewJobsController', EmployeeViewJobsController);
    EmployeeViewJobsController.$inject = ['$scope', '$state', '$stateParams', 'AuthService', 'ServiceEmployee'];
    function EmployeeViewJobsController($scope, $state, $stateParams, AuthService, ServiceEmployee) {

        var Employee = this;
        Employee.JobID = $stateParams.JobID;
        Employee.job = {};

        /** View single job
         ------------------------------------------------------------------------------------------ */
        if (Employee.JobID) {
            ServiceEmployee.ViewSingleJob(Employee.JobID, function (response) {
                Employee.job = response.data[0];
                console.log(Employee.job);
            });
        }

    }




})(jQuery, angular);