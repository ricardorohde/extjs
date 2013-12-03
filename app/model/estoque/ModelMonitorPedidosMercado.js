Ext.define('AppName.model.estoque.ModelMonitorPedidosMercado',{
    extend: 'Ext.data.Model',
    
    idProperty: 'id_pedido',
    
    fields: [
        {name: 'id_pedido', type: 'int'},
        {name: 'valor_pedido', type: 'double'},
        {name: 'nome', type: 'string'},
        {name: 'status', type: 'string'},
        {name: 'data', type: 'string'},
    ]
});