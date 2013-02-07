Ext.define('Restful.store.OptionsStore', {
    extend: 'Ext.data.TreeStore',
    requires: ['Ext.data.TreeStore'],
    
    config: {
    	root: {
            expanded: true,
            children: [{
            	text: 'Dashboard History',
            	leaf: true
            },{
            	text: 'Published Dashboards',
            	leaf: true
            },{
            	text: 'System Information',
            	leaf: true
            },{
            	text: 'User Dashboards',
            	leaf: true
            },{
            	text: 'User Inbox',
            	leaf: true
            },{
            	text: 'User Options',
            	leaf: true
            },{
            	text: 'User Queries',
            	leaf: true
            },{
            	text: 'User Queries Options',
            	leaf: true
            },{
            	text: 'User Subscriptions',
            	leaf: true
            }]
        }        
    },
    
    initialize: function() {
        
    }
});