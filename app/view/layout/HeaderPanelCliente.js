Ext.define('AppName.view.layout.HeaderPanelCliente',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerPanelCliente',
    
    region: 'north', 
    height:60, 
    frameHeader:false, 
    bodyPadding:'4 4', 
    layout:'border', 
    bodyStyle: 'background:#fff; border-color:#c0c0c0;',
    
    items:[
//        {
//            xtype:'panel',
//            bodyStyle: 'background:#fff; border-color:#fff;',
//            region: 'west',
//            width: 200,
//            html: '<h1 style =" font-size:35; font-style:inherit;color:#c5c5c5"> <b>Fast Market</b></h1>'
//        },
        {
            xtype: 'button', 
            action: 'getCategorias',
            id: 'Padaria e Sobremesas',
            iconCls: 'padaria', 
//            icon: 'resources/icons/Novos/Selecionados/padaria_.png',
            shadow: true, 
            region:'west', 
            width: 50, 
            height: 60, 
            margins: '2 2 2 2', 
            scale:'large', 
            iconAlign: 'top', 
            text:' ', 
            tooltip: 'Favoritos',
            tooltipType: 'title',
            
//            cls: 'x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-large x-icon x-btn-icon-text-left x-btn-default-toolbar-large-icon-text-top'
//            handler:function(){
//                     
//                 }
       },
        {
             xtype: 'button', 
             id:'Mercearia',
             iconCls: 'mercearia',
//            icon: 'resources/icons/Novos/Selecionados/mercearia_.png',
            action: 'getCategorias',
             region: 'west', 
             width: 50, 
             height: 40, 
             margins: '2 2 2 2', 
             scale:'large', 
             iconAlign: 'top',
//             handler:function(){
//                 Ext.widget('winProdutos')
//
//              }
            tooltip: 'Mercearia',
            tooltipType: 'title',
//                        cls: 'x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-large x-icon x-btn-icon-text-left x-btn-default-toolbar-large-icon-text-top'

        },
                {
                    xtype: 'button', 
                    id: 'Carnes',
                    action: 'getCategorias',
                    iconCls: 'carnes', 
//                    icon: 'resources/icons/Novos/Selecionados/carnes_.png',
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text: ' ',
                    tooltip: 'Carnes',
                    tooltipType: 'title',
//                    cls: 'x-btn x-unselectable x-box-item x-toolbar-item x-btn-default-toolbar-large x-icon x-btn-icon-text-left x-btn-default-toolbar-large-icon-text-top'
                },
                {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id: 'Frios Leites e Derivados',
                    iconCls: 'frios', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2',
                    scale:'large', 
                    iconAlign: 'top',
                    tooltip: 'Frios',
                    tooltipType: 'title',
               },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
                    id: 'Frutas Ovos e Verduras',
                    iconCls: 'frutas', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top',
                    tooltip: 'Frutas',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id: 'Comidas Prontas e Congeladas',
                    iconCls: 'Congelados', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Congelados',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id: 'Bebidas',
                    iconCls: 'bebidas', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Bebidas',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
                    id: 'Higiene Pessoal',
                    iconCls: 'higiene',  
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Higiene Pessoal',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button', 
                    action: 'getCategorias',
                    id:  'Saude e Beleza', 
                    iconCls:  'saude', 
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Saúde e Beleza',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
                    iconCls: 'bazar',
                    id: 'Bazar e Limpeza',
                    region: 'west', 
                    width: 50, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:' ',
                    tooltip: 'Bazar e Limpeza',
                    tooltipType: 'title',
                },
                 {
                    xtype: 'button',
                    action: 'getCategorias',
//                    iconCls: 'bazar',
                    id: 'Kits',
                    region: 'west', 
                    width: 60, 
                    height: 40, 
                    margins: '2 2 2 2', 
                    scale:'large', 
                    iconAlign: 'top', 
                    text:'Kits',
                    tooltip: 'Kits',
                    tooltipType: 'title',
                },
                {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Meus Pedidos', 
                    width: 120, 
                    margins: '2 2 2 2',
                    action : 'showWindowMeusPedidos'
               },
                {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Editar Cadastro', 
                    width: 120, 
                    margins: '2 2 2 2',
                    action : 'showWindowGerenciarClientes'
                    
               },
//                 {
//                    xtype: 'button', 
//                    region: 'east', 
//                    text: 'Gerenciar Mercados', 
//                    width: 130, 
//                    margins: '2 2 2 2',
//                    action: 'showWindowGerenciarMercado'
//                },
//                 {
//                    xtype: 'button', 
//                    region: 'east', 
//                    text: 'Gerenciar Produtos', 
//                    width: 130, 
//                    margins: '2 2 2 2',
//                    action: 'showWindowGerenciarProdutos'
//                },
                 {
                    xtype: 'button', 
                    region: 'east', 
                    text: 'Logout', 
                    action: 'logout',
                    width: 80, 
                    margins: '2 2 2 2'
                },
                //{
                   // xtype:'searchPanel'
                //}
    ]
});
