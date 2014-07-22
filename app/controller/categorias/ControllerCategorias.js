Ext.define('AppName.controller.categorias.ControllerCategorias',{
	extend: 'Ext.app.Controller',

	stores:[
		'categorias.StoreListaCategorias',
		'categorias.StoreListaSubcategorias',
	],

	models: [
		'categorias.ModelListaCategorias'
	],

	views: [
		'categorias.GridListaCategorias',
		'categorias.WindowListaCategorias',
		'categorias.GridListaSubcategorias',
		'categorias.WindowCadCategorias',
		'categorias.FormCadCategorias',
		'categorias.FormCadSubcategoriaNivel1',
		'categorias.WindowCadSubcategoriaNivel1',
		'categorias.WindowCadSubcategoriaNivel2',
		'categorias.GridSubcategoriasNivel2'
	],

	init: function(){
        this.control({
            'gridListaCategorias button[action=add_categorias]': {click: this.add_categorias},

          
        })
    },

    add_categorias: function(){
    	Ext.widget('windowCadCategorias')
    }
});