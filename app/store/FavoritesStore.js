Ext.define('Restful.store.FavoritesStore', {
    extend: 'Ext.data.TreeStore',
    requires: ['Ext.data.TreeStore'],
    
    config: {
        root: {
            expanded: true,
            children: [{
            	text: 'Executive Summary',
            	leaf: true
            },{
            	text: 'Emergency Response',
            	leaf: true
            },{
            	text: 'Current Outages',
            	leaf: true
            },{
            	text: 'Work Backlog',
            	leaf: true
            },{
            	text: 'Work Commitments',
            	leaf: true
            },{
            	text: 'Work Performance',
            	leaf: true
            },{
            	text: 'Work Valume',
            	leaf: true,
            },{
            	text: 'Asset Health Monitor',
            	leaf: true
            }]
        }        
    },
    
    initialize: function() {
        
    }
});