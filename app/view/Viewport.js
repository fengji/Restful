Ext.define('Restful.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion'
    ],
    layout: {
        type: 'border'
    },
    items: [{
    	region: 'north',
    	xtype: 'container',
    	id: 'header',
    	layout: {
    		type: 'hbox',
    	    align: 'middle'
    	},
    	items: [{
    	    xtype: 'image',
    	    src: 'resources/images/Ventyx_logoTM_black.png',
    	    width: 136,
    	    height: 40
    	},{
    		xtype: 'label',
    		html: 'Focal Point',
    		id: 'productNameLabel'
    	},{
    		flex: 1,
    		xtype: 'container',
    		layout: {
    			type: 'hbox',
    			pack: 'end'
    		},
        	items: [{
        		flex: 1,
        		xtype: 'tbspacer'
        	},{	
        		xtype: 'form',
        		id: 'searchForm',
        		border: false,
        		margins: '0 50 0 0',
        		bodyStyle: 'background:transparent;',
        		layout: {
        			type: 'hbox'
        		},
        		items: [{
        			xtype: 'textfield',
        		    width:200,
        		},{
        			xtype: 'button',
        			text: 'Search',
        			id: 'searchButton'
        		}]
        	},{
        		xtype: 'label',
        		text: 'John Smith',
        		padding: '3 5 0 0'
        	},{
        		xtype: 'button',
                text: 'Settings',
                iconCls:'settings'
        	}]
    	}
    	]
    },{
        xtype: 'container',
        region: 'center',
        layout: 'border',
        padding: '5 5 5 5', // pad the layout from the window edges
        items: [{
            id: 'app-options',
            title: 'Navigation',
            region: 'west',
            animCollapse: true,
            width: 200,
            minWidth: 150,
            maxWidth: 400,
            split: true,
            collapsible: true,
            collapsed: true,
            layout:{
                type: 'accordion',
                animate: true
            },
            items: [{
                title:'Favorites',
                autoScroll: true,
                border: false,
                iconCls: 'favorites'
            },{
                title:'Dashboards',
                border: false,
                autoScroll: true,
                iconCls: 'dashboards'
            },{
                title:'Settings',
                border: false,
                autoScroll: true,
                iconCls: 'settings'
            }]
        },{
            id: 'app-portal',
            xtype: 'panel', //xtype: 'portalpanel',
            region: 'center',
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