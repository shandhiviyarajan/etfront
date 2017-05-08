/**
 * @project - Easy trades
 * @date - April 28 2017
 * @type - Javacrit / JQuery/ Angular
 * @author - Shan Dhiviyajan <prashasoft@gmail.com>
 */

/*
 Directives
 --------------------------------------------------------------------------------------------------------------- */


(function ($, angular) {
    'use strict';
    //Angular application and configuration
    angular.module("etDirectives", ['etAPI']);

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

    /* Select box directive
     --------------------------------------------------------------------------------------------------------- */

    angular.module('etDirectives')
        .directive('etSelectBox', etSelectBox);
    function etSelectBox() {


        var directive = {
            restrict: "A",
            link: link
        };

        function link(scope, element, attr) {
            $(element).material_select();
        }

        return directive;

    }

    angular.module('etDirectives')
        .directive('etSearchJobs', etSearchJobs);

    function etSearchJobs() {

        var source_url = '/curl/view-jobs/jobs/';

        var directive = {
            restrict: "A",
            link: link
        };

        function link(scope, element, attr) {

            $("#search_jobs").autocomplete({
                source: source_url,
                minLength: 0
            });


        }

        return directive;

    }

})(jQuery, angular);