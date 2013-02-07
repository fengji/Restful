Ext.define('Restful.store.DashboardStore', {
    extend: 'Ext.data.TreeStore',
    requires: ['Ext.data.TreeStore'],
    
    config: {
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
            	},{
            		text: 'Storm Mgmt & Reliability',
            		expanded: false,
            		children: [{
            			text: 'Active Storm Outages',
            			leaf: true
            		},{
            			text: 'ETR Suppresion',
            			leaf: true
            		},{
            			text: 'Restoration Projects',
            			leaf: true
            		},{
            			text: 'Resource Tracking',
            			leaf: true
            		},{
            			text: 'Resource Tracking Report',
            			leaf: true
            		},{
            			text: 'Resource Tracking Admin',
            			leaf: true
            		}]
            	}]
            },{
            	text: 'Work Management',
            	children: [{
        			text: 'Work Volume',
        			leaf: true
        		},{
        			text: 'Construction Management'
        		},{
        			text: 'Scheduling'
        		}]
            },{
            	text: 'Field Force Management',
            	children: [{
            		text: 'Vehicle Location & Tracking'
            	},{
            		text: 'Accidents & Injuries'
            	},{
            		text: 'Compliance Tracking'
            	}]
            },{
            	text: 'Asset Management',
            	children: [{
            		text: 'Heath Index'
            	},{
            		text: 'Asset Health Center'
            	}]
            },{
            	text: 'SmartGrid',
            	children: [{
            		text: 'Meter Analytics',
            		children: [{
            			text: 'Meter Analytics',
            		    leaf: true
            		},{
            			text: 'Meter Analytics Query',
            		    leaf: true
            		},{
            			text: 'Meter Health Index',
            		    leaf: true
            		},{
            			text: 'Manual Reads',
            		    leaf: true
            		},{
            			text: 'Meter Maintenance',
            		    leaf: true
            		}]
            	},{
            		text: 'Revenue Projection',
            		children: [{
            			text: 'Revenue Loss',
            		    leaf: true
            		},{
            			text: 'Billing Estimate Accuracy',
            		    leaf: true
            		}]
            	},{
            		text: 'Network Performance',
            		children: [{
            			text: 'Network Status',
            		    leaf: true
            		},{
            			text: 'Network Reliability',
            		    leaf: true
            		},{
            			text: 'Network Health Index',
            		    leaf: true
            		},{
            			text: 'Momentary Analysis',
            		    leaf: true
            		},{
            			text: 'Vegetation Impact Analysis',
            		    leaf: true
            		}]
            	},{
            		text: 'Network Security',
            		children: [{
            			text: 'Intrusion Detection Alarms',
            		    leaf: true
            		},{
            			text: 'Intrusion Detection QA',
            		    leaf: true
            		}]
            	}]
            },{
            	text: 'Customer Service',
            	children: [{
            		text: 'Call Center Performance',
            		children: [{
            			text: 'Call Center',
            			leaf: true
            		}]
            	}]
            },{
            	text: 'Financials',
            	children: [{
            		text: 'Financials',
            		children: [{
            			text: 'Cost Analysis',
            			leaf: true
            		},{
            			text: 'Executive Summary',
            			leaf: true
            		},{
            			text: 'Budget Comparisons',
            			leaf: true
            		},{
            			text: 'AP Aging',
            			leaf: true
            		},{
            			text: 'Profit and Loss Detail',
            			leaf: true
            		},{
            			text: 'Profit and Loss Summary',
            			leaf: true
            		},{
            			text: 'Trial Balance',
            			leaf: true
            		}]
            	}]
            },{
            	text: 'Energy Efficiency',
            	children: [{
            		text: 'Program Management',
            		children: [{
            			text: 'Program Summary',
            			leaf: true
            		},{
            			text: 'Program Coverage',
            			leaf: true
            		},{
            			text: 'Program Results',
            			leaf: true
            		}]
            	}]
            },{
            	text: 'Energy Management',
            	children: [{
            		text: 'System Status',
            		children: [{
            			text: 'Transmission Status',
            			leaf: true
            		},{
            			text: 'Generation Status',
            			leaf: true
            		}]
            	}]
            },{
            	text: 'System Information',
            	children: [{
            		text: 'Database Objects',
            		leaf: true
            	},{
            		text: 'KPI Library',
            		leaf: true
            	},{
            		text: 'BIM Data Dictionary',
            		leaf: true
            	},{
            		text: 'BIM Warehouse ERD',
            		leaf: true
            	},{
            		text: 'FocalPoint Usage',
            		leaf: true
            	},{
            		text: 'Executive Summary',
            		leaf: true
            	},{
            		text: 'Data Validation',
            		leaf: true
            	},{
            		text: 'Spatial Configs',
            		leaf: true
            	}]
            },{
            	text: 'CCC',
            	children: [{
            		text: 'Collection Summary',
            		leaf: true
            	},{
            		text: 'CCC',
            		children: [{
            			text: 'Collector Performance',
            			leaf: true
            		},{
            			text: 'Credit and Collections',
            			leaf: true
            		}]
            	}]
            }
            ]
        }        
    },
    
    initialize: function() {
        
    }
});