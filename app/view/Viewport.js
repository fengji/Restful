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
    	id: 'app-header',
    	layout: {
    		type: 'hbox',
    	    align: 'middle'
    	},
    	items: [{
    	    xtype: 'image',
    	    src: 'resources/images/Ventyx_logoTM_black.png',
    	    width: 170,
    	    height: 50
    	},{
    		xtype: 'label',
    		html: 'Focal Point',
    		id: 'product-name'
    	},{
    		flex: 1,
    		xtype: 'container',
    		layout: {
    			type: 'hbox',
    			pack: 'end',
    			align: 'middle'
    		},
    		defaults: {
    			padding: '5'
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
        			type: 'hbox',
        			align: 'middle'
        		},
        		items: [{
        			xtype: 'textfield',
        		    width:200,
        		},{
        			xtype: 'button',
        			text: 'Search',
        			id: 'search-btn'
        		}]
        	},{
        		xtype: 'label',
        		text: 'John Smith'
        	},{
        	    xtype: 'image',
        	    src: 'resources/images/user_picture.png',
        	    width: 48,
        	    height: 48
        	},{
        	    xtype: 'image',
        	    src: 'resources/images/gear.png',
        	    width: 32,
        	    height: 32
        	}]
    	}]
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
    }]
});