Ext.define('AppName.view.dataview.AlbumTree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.albumtree',
    
    title: 'My Albums',
    animate: true,
    rootVisible: false,
    
    viewConfig: {
        plugins: [{
            ddGroup: 'organizerDD',
            ptype  : 'treeviewdragdrop'
        }]
    },
    
    displayField: 'name',
    
    initComponent: function() {
        this.count = 1;
        
        this.tbar = [
            {
                text: 'New Album',
                iconCls: 'album-btn',
                scope: this,
                handler: this.addAlbum
            }
        ];
        
        this.store = Ext.create('Ext.data.TreeStore', {
            fields: ['name'],
            
            root: {
                name: 'Root',
                allowDrop: false,
                expanded: true,
                children: [
                    {
                        name   : 'Album 1',
                        iconCls: 'album-btn',
                        children: []
                    }
                ]
            }
        });
        
        this.callParent();
    },
    
    /**
     * Adds a new album node to the root
     */
    addAlbum: function() {
        var root = this.store.getRootNode();
        this.count++;
        
        root.appendChild({
            name: 'Album ' + this.count,
            iconCls: 'album-btn',
            children: []
        });
    }
});
