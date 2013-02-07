var dashboardsStore = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [{
        	text: 'Operations',
        	expanded: true,
        	children: [{
        		text: 'Switch Plans',
        		expanded: false,
        		children: [{
        			text: 'Current Switching',
        			leaf: true
        		},{
        			text: 'Switch Plan Query',
        			leaf: true
        		},{
        			text: 'Tag Query',
        			leaf: true
        		},{
        			text: 'Abnormal Device Query',
        			leaf: true
        		},{
        			text: 'Device Operations Query',
        			leaf: true
        		}]
        	},{
        		text: 'Outage Management',
        		expanded: false,
        		children: [{
        			text: 'Current Outages',
        			leaf: true
        		},{
        			text: 'Restoration Status',
        			leaf: true
        		},{
        			text: 'Customer Outages',
        			leaf: true
        		},{
        			text: 'ERT Status',
        			leaf: true
        		},{
        			text: 'Customer Query',
        			leaf: true
        		},{
        			text: 'Daily Outage Report',
        			leaf: true
        		}]
        	},{
        		text: 'Asset Reliability',
        		expanded: false,
        		children: [{
        			text: 'Asset Reliability',
        			leaf: true
        		},{
        			text: 'Work Performing Circuits',
        			leaf: true
        		},{
        			text: 'Outage History Analysis',
        			leaf: true
        		},{
        			text: 'Reliability Analysis',
        			leaf: true
        		}]
        	}]
        }]
    }
});

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
    		html: 'FocalPoint',
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
            defaults: {
                autoScroll: true,
                border: false,
            },
            items: [{
                title:'Dashboards',
                iconCls: 'dashboards',
                items: [{
                    xtype: 'treepanel',
                    store: dashboardsStore,
                    rootVisible: false,
                    border: false
                }]
            },{
                title:'Favorites',
                iconCls: 'favorites'
            },{
                title:'Settings',
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
    	collapsed: true,
    	title: 'Footer Region',
    	split: true,
    	height: 100
    	
    }]
});