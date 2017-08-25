/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'MyModel'
    ],
    stores: [
        'MyStore'
    ],
    views: [
        'MyViewport',
        'MyViewport1',
        'MyWindow',
        'MyViewport2'
    ],
    controllers: [
        'MyController'
    ],
    name: 'HW1',

    launch: function() {
        Ext.create('HW1.view.MyViewport');
    }

});