Ext.define('AppName.controller.ControllerHeaderPanel',{
    extend: 'Ext.app.Controller',
    
    stores: [
        
        
    ],
    models: [
        
    ],
    views: [
       
       'layout.HeaderPanel',
       'layout.SearchPanel',
       
       
    ],
    
    init: function(){
        this.control({
            
         'headerPanel button[action=getCategorias]': {click: this.getCategorias},
          
        })
    },
            
    getCategorias: function(bt){
        var catName = bt.id;
        if(Ext.getCmp('panel-categorias').collapsed == 'left'){
            Ext.getCmp('panel-categorias').expand()
            
        }
        console.log(catName);
        
    }
})