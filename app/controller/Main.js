Ext.define('Restful.controller.Main', {
    extend: 'Ext.app.Controller',
    requires:[
              'Restful.view.Main'
              ],
    config:{
    	view: 'Restful.view.Main'
    },
    initialize: function(){
    	this.callParent();
    }
});