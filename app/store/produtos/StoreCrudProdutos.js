Ext.define('AppName.store.produtos.StoreCrudProdutos',{
    extend: 'Ext.data.Store',
    
    model: 'AppName.model.produtos.ModelCrudProdutos',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        //simpleSortMode: true,
        type: 'ajax',
        api:{
            read: 'app/data/php/Produtos.php?action=select',
            create: 'app/data/php/Produtos.php?action=insert'
        },        
        
        reader: {
            
            type: 'json',
            root: 'data',
            seccessProperty: 'success'
        },
        
        writer:{
            type: 'json',
            writeAllFields: true,
            allowSingle: true,
            encode: true,
            root: 'data'
        }
    }
    
    
});