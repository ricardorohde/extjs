Ext.define('AppName.view.produtos.WindowCadProduto',{
    extend: 'Ext.window.Window',
    alias: 'widget.windowCadProduto',
    id: 'windowCadProduto',
    
    autoShow: true,
    width: 720,
    height: 480,
    closable: true,
    layout: 'border',
    modal: true,
    items:[
        {
            xtype: 'formCadProduto',
            region: 'center'
        },
        {
            xtype: 'treeCategoriasProdutos',
            region: 'west',
            ui: 'light'
        }
    ],
    buttons:[
        {
            text: 'Save',
            action: 'save'
        },
        {
            text: 'Cancel',
            action: 'cancel'
        }
    ]
    
});