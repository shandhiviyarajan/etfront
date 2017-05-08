/**
 * @project - Easy trades
 * @date - April 28 2017
 * @type - Javacrit / JQuery/ Angular
 * @author - Shan Dhiviyajan <prashasoft@gmail.com>
 */

/*
 Angular Constant - Resource URLs
 ----------------------------------------------------------------------------------------------------------------- */
// change this urls in production

//(function ($, angular) {
//    'use strict';
//
//    angular.module('etCore', []);
//    angular.module('etCore')
//        .constant('RESOURCE_URL', {
//            LOGIN: '/curl/login',
//            SIGN_UP: '/curl/sign-up/',
//            PROFILE_OTHER_USER: '',
//            SIGN_OUT:'/curl/sign-out',
//
//            'EMPLOYEE': {
//                MY_PROFILE_EMPLOYEE: '/curl/my-profile/employee/profile',
//                MY_PROFILE_EMPLOYEE_OTHERS: '/curl/my-profile/employee/profile-others',
//                UPDATE_PROFILE:'/curl/update-profile/employee',
//                VIEW_JOBS: '/curl/view-jobs/employee/jobs',
//                VIEW_JOB_BY_ID: '/curl/view-jobs/employee/job_id',
//                ADD_LOCATION:'/curl/add-location/employee',
//                EDIT_LOCATION:'/curl/add-location/employee',
//                GET_TIMESHEETS:''
//
//            },
//            'EMPLOYER': {
//                MY_PROFILE_EMPLOYEE: '/curl/my-profile/employee/profile',
//                MY_PROFILE_EMPLOYEE_OTHERS: '/curl/my-profile/employee/profile-others',
//                UPDATE_PROFILE:'/curl/update-profile/employee',
//                VIEW_JOBS: '/curl/view-jobs/employee',
//                VIEW_JOB_BY_ID: '/curl/view-jobs/employee/job_id',
//                ADD_LOCATION:'/curl/add-location/employee',
//                EDIT_LOCATION:'/curl/add-location/employee',
//                GET_TIMESHEETS:''
//            }
//        });
//
//})(jQuery, angular);


(function ($, angular) {
    'use strict';

    angular.module('etCore', []);
    angular.module('etCore')
        .constant('RESOURCE_URL', {
            LOGIN: 'http://easytrades.herokuapp.com/login',
            SIGN_UP: 'http://easytrades.herokuapp.com/signup',
            PROFILE_OTHER_USER: '',
            SIGN_OUT:'http://easytrades.herokuapp.com/logout',

            'EMPLOYEE': {
                MY_PROFILE_EMPLOYEE: 'http://easytrades.herokuapp.com/employee/my-profile',
                MY_PROFILE_EMPLOYEE_OTHERS: 'http://easytrades.herokuapp.com/employee/nuwans/profile',
                UPDATE_PROFILE:'http://easytrades.herokuapp.com/employee/nuwans/details',
                VIEW_JOBS: 'http://easytrades.herokuapp.com/employee/jobs',
                VIEW_JOB_BY_ID: 'http://easytrades.herokuapp.com/employee/jobs?id=1015d',
                VIEW_MY_JOBS:'http://easytrades.herokuapp.com/employee/myjobs',
                ADD_LOCATION:'http://easytrades.herokuapp.com/employee/nuwans/location',
                EDIT_LOCATION:'http://easytrades.herokuapp.com/employee/nuwans/location',
                GET_TIME_SHEETS:'http://easytrades.herokuapp.com/employee/nuwans/timesheets',
                GET_TIME_SHEETS_BY_FILTER:'http://easytrades.herokuapp.com/employee/timesheets',
                VIEW_TIME_SHEETS:'http://easytrades.herokuapp.com/employee/nuwans/timesheets',
                ADD_TIME_SHEET:'http://easytrades.herokuapp.com/employee/n1/timesheet',
                APPLY_TO_JOB:'http://easytrades.herokuapp.com/employee/apply/1021/true',
                WITHDRAW_APPLICATION:'http://easytrades.herokuapp.com/employee/apply/jobid/false',
                ADD_BANK_ACCOUNT_STEP_1:'http://easytrades.herokuapp.com/user/billing/bank',
                ADD_BANK_ACCOUNT_STEP_2:'http://easytrades.herokuapp.com/user/billing/'

            },
            'EMPLOYER': {
                MY_PROFILE_EMPLOYEE: 'http://easytrades.herokuapp.com/employee/my-profile',
                MY_PROFILE_EMPLOYEE_OTHERS: 'http://easytrades.herokuapp.com/employee/nuwans/profile',
                UPDATE_PROFILE:'http://easytrades.herokuapp.com/employee/nuwans/details',
                VIEW_JOBS: 'http://easytrades.herokuapp.com/employee/jobs',
                VIEW_JOB_BY_ID: 'http://easytrades.herokuapp.com/employee/jobs?id=1015d',
                VIEW_MY_JOBS:'http://easytrades.herokuapp.com/employee/myjobs',
                ADD_LOCATION:'http://easytrades.herokuapp.com/employee/nuwans/location',
                EDIT_LOCATION:'http://easytrades.herokuapp.com/employee/nuwans/location',
                GET_TIME_SHEETS:'http://easytrades.herokuapp.com/employee/nuwans/timesheets',
                GET_TIME_SHEETS_BY_FILTER:'http://easytrades.herokuapp.com/employee/timesheets',
                VIEW_TIME_SHEETS:'http://easytrades.herokuapp.com/employee/nuwans/timesheets',
                ADD_TIME_SHEET:'http://easytrades.herokuapp.com/employee/n1/timesheet',
                APPLY_TO_JOB:'http://easytrades.herokuapp.com/employee/apply/1021/true',
                WITHDRAW_APPLICATION:'http://easytrades.herokuapp.com/employee/apply/jobid/false',
                ADD_BANK_ACCOUNT_STEP_1:'http://easytrades.herokuapp.com/user/billing/bank',
                ADD_BANK_ACCOUNT_STEP_2:'http://easytrades.herokuapp.com/user/billing/'
            }
        });

})(jQuery, angular);


