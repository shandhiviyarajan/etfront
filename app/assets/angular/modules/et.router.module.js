/**
 * @project - Easy trades
 * @date - April 28 2017
 * @type - Javacrit / JQuery/ Angular
 * @author - Shan Dhiviyajan <prashasoft@gmail.com>
 */

/*
 Application Router
 --------------------------------------------------------------------------------------------------------------- */


(function ($, angular) {
    'use strict';

    /**
     * Angular config
     * --------------------------------------------------------------------------------------------------------*/

    angular.module('etRouter', ['etAPI', 'ui.router'])
        .config(config);
    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    /**
     * Angular router
     * --------------------------------------------------------------------------------------------------------*/
    function config($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise("/");
        //var base = "https://easytraders.herokuapp.com";
        var base = "";

        var home = {
            name: 'home',
            url: '/',
            templateUrl: base + '/templates/home',
            controller: 'ngHomeCtrl',
            controllerAs: "Home"
        };

        var signIn = {
            name: 'signIn',
            url: '/sign-in',
            templateUrl: base + '/templates/sign-in'
        };

        var signInEmployee = {
            name: 'signInEmployee',
            url: '/sign-in/sign-in-contractor',
            templateUrl: base + '/templates/sign-in-contractor'


        };

        var signInEmployer = {
            name: 'signInEmployer',
            url: '/sign-in/sign-in-employer',
            templateUrl: base + '/templates/sign-in-employer'
        };

        var signUp = {
            name: 'signUp',
            url: '/sign-up',
            templateUrl: 'templates/sign-up'
        };

        var signUpEmployee = {
            name: 'signUpEmployee',
            url: '/sign-up/sign-up-contractor',
            templateUrl: base + '/templates/sign-up-contractor',
            controller: 'CreateEmployeeController'

        };

        var signUpEmployer = {
            name: 'signUpEmployer',
            url: '/sign-up/sign-up-employer',
            templateUrl: base + '/templates/sign-up-employer',
            controller: 'CreateEmployerController'

        };

        var myProfile = {
            name: 'myProfile',
            url: '/my-profile/employee',
            templateUrl: base + '/templates/my-profile/',
            authenticate: true
        };


        var ProfileOthers = {
            name: 'ProfileOthers',
            url: '/my-profile/employee/:ApplicantID',
            templateUrl: base + '/templates/my-profile/',
            controller: function ($scope, $stateParams) {
                $scope.ApplicantID = $stateParams.ApplicantID;

            }
        };

        var findStaff = {
            name: 'findStaff',
            url: '/find-staff',
            templateUrl: base + '/templates/find-staff'
        };
        var staff = {
            name: 'staff',
            url: '/staff',
            templateUrl: base + '/templates/staff'
        };
        var seekJobs = {
            name: 'seekJobs',
            url: '/seek-jobs',
            templateUrl: base + '/templates/seek-jobs'
        };

        var postJob = {
            name: 'postJob',
            url: '/post-a-job',
            templateUrl: base + '/templates/post-a-job'
        };
        var myJobs = {
            name: 'myJobs',
            url: '/my-jobs',
            templateUrl: base + '/templates/my-jobs',
            controller:'EmployeeJobsController'
        };

        var viewJob = {
            name: 'viewJob',
            url: '/view-job/:JobID',
            templateUrl: base + '/templates/view-jobs',
            controller:'EmployeeViewJobsController'
        };


        var about = {
            name: 'about',
            url: '/about',
            templateUrl: base + '/templates/about'
        };

        var faq = {
            name: 'faq',
            url: '/faq',
            templateUrl: base + '/templates/faq'
        };

        var terms = {
            name: 'terms',
            url: '/terms',
            templateUrl: base + '/templates/terms'
        };

        var contact = {
            name: 'contact',
            url: '/contact',
            templateUrl: base + '/templates/contact'
        };

        var myBusiness = {
            name: 'myBusiness',
            url: '/my-business',
            templateUrl: base + '/templates/my-business'
        };
        var myBusinessHome = {
            name: 'myBusinessHome',
            url: '/my-business-home',
            templateUrl: base + '/templates/my-business-home',
            controller:'MyProfileEmployeeController'
        };

        var addLocation = {
            name: 'addLocation',
            url: '/add-location',
            templateUrl: base + '/templates/add-location'
        };

        var addExperience = {
            name: 'addExperience',
            url: '/add-experience',
            templateUrl: base + '/templates/add-experience'
        };

        var addSkills = {
            name: 'addSkills',
            url: '/add-skills',
            templateUrl: base + '/templates/add-skills'
        };

        var all = {
            name: 'all',
            url: '/all',
            templateUrl: base + '/templates/all'
        };

        /**
         * Staff
         */
        $stateProvider.state(home);
        $stateProvider.state(findStaff);
        $stateProvider.state(staff);


        /**
         * Add
         */
        $stateProvider.state(addLocation);
        $stateProvider.state(addExperience);
        $stateProvider.state(addSkills);


        /**
         * Jobs
         */
        $stateProvider.state(seekJobs);
        $stateProvider.state(postJob);
        $stateProvider.state(myJobs);
        $stateProvider.state(viewJob);

        /**
         * My business
         */
        $stateProvider.state(myBusiness);
        $stateProvider.state(myBusinessHome);

        /**
         * Sign in routes
         */
        $stateProvider.state(myProfile);
        $stateProvider.state(ProfileOthers);
        $stateProvider.state(signIn);
        $stateProvider.state(signInEmployee);
        $stateProvider.state(signInEmployer);


        /**
         * Sign up routes
         */
        $stateProvider.state(signUp);
        $stateProvider.state(signUpEmployee);
        $stateProvider.state(signUpEmployer);

        /**
         * Static pages
         */

        $stateProvider.state(about);
        $stateProvider.state(contact);
        $stateProvider.state(faq);
        $stateProvider.state(terms);
        $stateProvider.state(all);
    }

    /**
     * Angular run
     * --------------------------------------------------------------------------------------------------------*/
    angular.module('etRouter')
        .run(run);
    run.$inject = ['$rootScope', 'AuthService'];
    function run($rootScope, AuthService) {
        //Create a blank user object//
        $rootScope.globals = {
            current_user: {
                username: null,
                token: null
            }
        };
        $rootScope.isAuthenticated = AuthService.isAuthenticated();
    }

})(jQuery, angular);