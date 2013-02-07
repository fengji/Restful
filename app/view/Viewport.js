Ext.define('Restful.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border'
    },

    items: [{
    	region: 'north',
    	xtype: 'panel',
    	title: 'Header',
    	height: 150
    },
            
    {
        region: 'west',
        xtype: 'panel',
        title: 'Navigation',
        width: 150,
        split:true,
        collapsible: true
    },
    {
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Dashboard',
            xtype: 'mainview'	
        }]
    },
    {
    	region: "south",
    	xtype: 'panel',
    	collapsible: true,
    	title: 'Footer Region',
    	split: true,
    	height: 100
    	
    }]
});