/**
 * @project - Easy trades
 * @date - April 28 2017
 * @type - Javacrit / JQuery/ Angular
 * @author - Shan Dhiviyajan <prashasoft@gmail.com>
 */

/*
 Application start
 --------------------------------------------------------------------------------------------------------------- */

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

