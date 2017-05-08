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
            templateUrl: base + '/templates/sign-in-contractor',
            controller: 'LoginController'

        };

        var signInEmployer = {
            name: 'signInEmployer',
            url: '/sign-in/sign-in-employer',
            templateUrl: base + '/templates/sign-in-employer',
            controller: 'LoginController'
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
            url: '/my-profile',
            templateUrl: base + '/templates/my-profile',
            controller: 'MyProfileController',
            authenticate: true
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
            templateUrl: base + '/templates/my-jobs'
        };

        var job = {
            name: 'job',
            url: '/job',
            templateUrl: base + '/templates/job'
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
            templateUrl: base + '/templates/my-business-home'
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
        $stateProvider.state(job);

        /**
         * My business
         */
        $stateProvider.state(myBusiness);
        $stateProvider.state(myBusinessHome);

        /**
         * Sign in routes
         */
        $stateProvider.state(myProfile);
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
    run.$inject = ['$rootScope', '$state', 'AuthService'];
    function run($rootScope, $state, AuthService) {
        //Create a blank user object//
        $rootScope.globals = {
            current_user: {
                username: null,
                token: null
            }
        };
    }

})(jQuery, angular);
(function ($, angular) {


    angular.module('etControllers', ['etAPI', 'ngCookies']);

    /**
     * Main Controller
     * ------------------------------------------------------------------------------------------ */
    angular.module('etControllers')
        .controller('ngMainController', ngMainController);
    ngMainController.$inject = ['$scope', 'AuthService'];

    function ngMainController($scope, AuthService) {
        var Main = this;
        Main.isAuthenticated = AuthService.isAuthenticated();
        console.log("Main Controller");

        /**
         * User Logout
         *---------------------------------------------------------------------------------------- */
        Main.signOut = function () {
            AuthService.ClearCredentials();
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
        Login.login = function () {
            AuthService.Login(Login.email, Login.password, function (response) {
                if (response.data.token) {
                    var LoggedUser = {
                        username: response.data.username,
                        token: response.data.token
                    };
                    //Set credentials//
                    AuthService.SetCredentials(LoggedUser);

                    //Redirect to my profile//
                    $state.go("myProfile");
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
                console.log(response);
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
                console.log(response);
            });
        }
    }


    /**
     * My Profile Controller
     * ------------------------------------------------------------------------------------------ */
    angular.module('etControllers')
        .controller('MyProfileController', MyProfileController);
    MyProfileController.$inject = ['$scope', 'AuthService', '$state'];

    function MyProfileController($scope, AuthService, $state) {

        var Profile = this;
        Profile.user = {};
        Profile.initType = function (value) {
            Profile.type = value.toLowerCase();
        };
        Profile.other_user = {};
        console.log("My profile controller");

        /** Redirect non authenticated user to home / sign in
         ------------------------------------------------------------------------------------------------------- */

        if (!AuthService.isAuthenticated()) {
            $state.go("home");
        }

        /** Get profile user
         ------------------------------------------------------------------------------------------------------- */
        if (AuthService.isAuthenticated()) {
            AuthService.GetProfile(Profile.type, function (user) {
                Profile.user = user;
            });
        }


        /** Get profile other user
         ------------------------------------------------------------------------------------------------------- */
        Profile.getOtherUser = function (username) {
            if (AuthService.isAuthenticated()) {
                AuthService.GetProfileOthers(username, Profile.type, function (user) {
                    Profile.other_user = user;
                });
            }
        };

        /** Add Location
         ------------------------------------------------------------------------------------------------------- */
        Profile.addLocation = function () {
            if (AuthService.isAuthenticated()) {
                AuthService.AddLocation(Profile.type, function (response) {
                    console.log(response);
                });
            }
        }
    }

    /**
     * Employee Controller
     * ------------------------------------------------------------------------------------------ */

    angular.module('etControllers')
        .controller('EmployeeController', EmployeeController);
    EmployeeController.$inject = ['$scope', 'AuthService', 'ServiceEmployee'];
    function EmployeeController($scope, AuthService, ServiceEmployee) {

        var Employee = this;
        Employee.jobs = {};

        /** View jobs
         ------------------------------------------------------------------------------------------ */
        Employee.viewJobs = function () {
            if (AuthService.isAuthenticated()) {
                ServiceEmployee.ViewJobs(function (response) {
                    Employee.jobs = response;
                    console.log(response);
                });
            }
        };

        /** View single job
         ------------------------------------------------------------------------------------------ */
        Employee.singleJob = function (job_id) {
            if (AuthService.isAuthenticated()) {
                ServiceEmployee.ViewSingleJob(job_id, function (response) {
                    Employee.single_job = response;
                    console.log(response);
                });
            }
        }

    }


})(jQuery, angular);
(function ($, angular) {
    'use strict';
    //Angular application and configuration
    angular.module("etDirectives", []);

    /* Testimonial slider directive
     --------------------------------------------------------------------------------------------------------- */

    angular.module('etDirectives')
        .directive('ngTestimonialSlider', ngTestimonialSlider);
    function ngTestimonialSlider() {
        var directive = {
            restrict: "A",
            link: link
        };

        function link(scope, element, attrs) {
            $(element).bxSlider({
                mode: 'horizontal',
                controls: false,
                auto: true,
                pagerCustom: '#pager'
            });
        }

        return directive;
    }

})(jQuery, angular);
(function ($, angular) {
    "use strict";

    angular.module("etAPI", [
        'ngResource',
        'ngCookies',
        'angular-loading-bar'
    ]);

    /* Service Authentication
     --------------------------------------------------------------------------- */
    angular.module("etAPI")
        .factory("AuthService", AuthService);
    AuthService.$inject = ['$http', '$cookieStore', '$rootScope'];

    function AuthService($http, $cookieStore, $rootScope) {

        var AuthService = {};
        var response = {};

        /* Authentication Login / Sign In
         --------------------------------------------------------------------------- */
        AuthService.Login = function (email, password, callback) {
            $http({
                url: 'http://easytrades.herokuapp.com/login',
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data: "Email=" + email + "&" + "Password=" + password
            }).then(function (success) {
                response = success;
            }, function (error) {
                response = error;
            });

            callback(response);
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
            $http.defaults.headers.common['Authentication'] = 'JWT ' + user.token;

            //Set cookie
            $cookieStore.put('globals', $rootScope.globals);

        };


        /* Clear credentials
         ---------------------------------------------------------------------------- */
        AuthService.ClearCredentials = function () {

            $http({
                url: 'http://easytrades.herokuapp.com/logout',
                method: 'GET',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            }).then(function (success) {
                $rootScope.global = {
                    current_user: {
                        username: null,
                        token: null
                    }
                };
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';

            }, function (error) {

            });
        };

        /* Create new user
         ---------------------------------------------------------------------------- */
        AuthService.CreateUser = function (user, callback) {
            $http({
                url: "http://easytrades.herokuapp.com/signup",
                method: "POST",
                data: "Email=" + user.email + "&" + "Password=" + user.password + "&" + "UserName=" + user.username + "&" + "Type=" + user.type,
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }

            }).then(function (success, status, headers, config) {
                response = success;
            }, function (error, status, headers, config) {
                response = error;
            });
            callback(response);
        };

        /* is Authenticated
         --------------------------------------------------------------------------- */
        AuthService.isAuthenticated = function () {

            if ($rootScope.globals.current_user.token == "" || $rootScope.globals.current_user.token == undefined || $rootScope.globals.current_user.token == null) {
                console.log("isAuthenticated = false");
                return false;

            }

            //Original Compare with JWT token
            if ($rootScope.globals.current_user.token != "" || $rootScope.globals.current_user.token != undefined || $rootScope.globals.current_user.token != null) {
                console.log("isAuthenticated = true");
                return true;
            }

        };

        /* Get profile user - Employee / Employer
         --------------------------------------------------------------------------- */
        AuthService.GetProfile = function (type, callback) {

            $http({
                url: 'http://easytrades.herokuapp.com/' + type + '/my-profile',
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                response = success;
            }, function (error) {
                response = error;
            });
            callback(response);
        };

        /* Get profile other user - Employee / Employer
         --------------------------------------------------------------------------- */
        AuthService.GetProfileOthers = function (username, type, callback) {

            $http({
                url: 'http://easytrades.herokuapp.com/' + type + '/' + username + '/profile',
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            }).then(function (success) {
                response = success;
            }, function (error) {
                response = error;
            });
            callback(response);
        };

        /* Add location - Employee / Employer
         --------------------------------------------------------------------------- */
        AuthService.AddLocation = function (type, callback) {

            $http({
                url: 'http://easytrades.herokuapp.com/' + type + '/' + $rootScope.globals.current_user.username + '/location',
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                response = success;
            }, function (error) {
                response = error;
            });
            callback(response);
        };
        return AuthService;
    }

    /* Service Employee
     ------------------------------------------------------------------------------- */
    angular.module('etAPI')
        .factory('ServiceEmployee', ServiceEmployee);
    function ServiceEmployee() {
        var ServiceEmployee = {};
        var responseJobs = {};

        /* View jobs - Employee
         ------------------------------------------------------------------------------- */
        ServiceEmployee.ViewJobs = function (callback) {
            $http({
                url: 'http://easytrades.herokuapp.com/employee/jobs',
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                responseJobs = success;
            }, function (error) {
                responseJobs = error;
            });
            callback(responseJobs);
        };

        /* View single jobs - Employee
         ------------------------------------------------------------------------------- */
        var responseSingleJob = {};
        ServiceEmployee.ViewSingleJob = function (job_id, callback) {
            $http({
                url: 'http://easytrades.herokuapp.com/employee/jobs?id=' + job_id,
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'Authentication': 'JWT ' + $rootScope.globals.current_user.token
                }
            }).then(function (success) {
                responseSingleJob = success;
            }, function (error) {
                responseSingleJob = error;
            });

            callback(responseSingleJob);
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


})(jQuery, angular);
/**
 * @name Angular application
 * @date April 04 2017
 * @type Javascript / jQuery / Angular
 * @author
 */
(function ($, window, angular) {

    'use strict';

    //Angular application and configuration
    angular.module("etApp", [
        'etRouter',
        'etControllers',
        'etDirectives',
        'etAPI',
        'ui.router'
    ]);
})(jQuery, window, angular);

