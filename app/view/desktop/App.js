/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('AppName.view.desktop.App', {
    mixins: {
        observable: 'Ext.util.Observable'
    },

    requires: [
        'Ext.container.Viewport',

        'AppName.view.desktop.Desktop'
    ],

    isReady: false,
    modules: null,
    useQuickTips: true,

    constructor: function (config) {
        var me = this;
        me.addEvents(
            'ready',
            'beforeunload'
        );

        me.mixins.observable.constructor.call(this, config);

        if (Ext.isReady) {
            Ext.Function.defer(me.init, 10, me);
        } else {
            Ext.onReady(me.init, me);
        }
    },

    init: function() {
        var me = this, desktopCfg;

        if (me.useQuickTips) {
            Ext.QuickTips.init();
        }

        me.modules = me.getModules();
        if (me.modules) {
            me.initModules(me.modules);
        }

        desktopCfg = me.getDesktopConfig();
        me.desktop = new AppName.view.desktop.Desktop(desktopCfg);

        me.viewport = new Ext.container.Viewport({
            layout: 'fit',
            items: [ me.desktop ]
        });

        Ext.EventManager.on(window, 'beforeunload', me.onUnload, me);

        me.isReady = true;
        me.fireEvent('ready', me);
    },

    /**
     * This method returns the configuration object for the Desktop object. A derived
     * class can override this method, call the base version to build the config and
     * then modify the returned object before returning it.
     */
    getDesktopConfig: function () {
        var me = this, cfg = {
            app: me,
            taskbarConfig: me.getTaskbarConfig()
        };

        Ext.apply(cfg, me.desktopConfig);
        return cfg;
    },

    getModules: Ext.emptyFn,

    /**
     * This method returns the configuration object for the Start Button. A derived
     * class can override this method, call the base version to build the config and
     * then modify the returned object before returning it.
     */
    getStartConfig: function () {
        var me = this,
            cfg = {
                app: me,
                menu: []
            },
            launcher;

        Ext.apply(cfg, me.startConfig);

        Ext.each(me.modules, function (module) {
            launcher = module.launcher;
            if (launcher) {
                launcher.handler = launcher.handler || Ext.bind(me.createWindow, me, [module]);
                cfg.menu.push(module.launcher);
            }
        });

        return cfg;
    },

    createWindow: function(module) {
//        console.log(module.launcher.text)
        if(module.launcher.text == 'Configurações'){
            Ext.Ajax.request({
                url: 'app/data/php/Configuracoes.php?action=selectStatus',
                
                success:function(form, resp){
                    data = Ext.decode(form.responseText)
//                    console.log(data.cancelamento)
                    Ext.getCmp('confCancelamento').setValue(data.cancelamento)
                },
                
                failure: function(){
            
                }
            })
        }

        if(module.launcher.text == 'Cadastrar Produtos' ){
            var window = Ext.widget('gridListaProdutos')
            window.hide();
            Ext.widget('windowCadProduto')
        }
        
        else if(module.launcher.text == 'Meu Perfil'){
//            var window = module.createWindow();
            var grid = Ext.widget('gridListaMercados')
            grid.hide();
            var record = Ext.getCmp('gridListaMercados').store.data.items[0]
//            console.log(record)
            var editWindow = Ext.widget('windowCadMercado');
            var editForm = editWindow.down('form');
            editForm.loadRecord(record);
            
            
//            Ext.widget('windowCadProduto')
        }
        else {
            var window = module.createWindow();
            window.show();
        }
        
    },

    /**
     * This method returns the configuration object for the TaskBar. A derived class
     * can override this method, call the base version to build the config and then
     * modify the returned object before returning it.
     */
    getTaskbarConfig: function () {
        var me = this, cfg = {
            app: me,
            startConfig: me.getStartConfig()
        };

        Ext.apply(cfg, me.taskbarConfig);
        return cfg;
    },

    initModules : function(modules) {
        var me = this;
        Ext.each(modules, function (module) {
            module.app = me;
        });
    },

    getModule : function(name) {
    	var ms = this.modules;
        for (var i = 0, len = ms.length; i < len; i++) {
            var m = ms[i];
            if (m.id == name || m.appType == name) {
                return m;
            }
        }
        return null;
    },

    onReady : function(fn, scope) {
        if (this.isReady) {
            fn.call(scope, this);
        } else {
            this.on({
                ready: fn,
                scope: scope,
                single: true
            });
        }
    },

    getDesktop : function() {
        return this.desktop;
    },

    onUnload : function(e) {
        if (this.fireEvent('beforeunload', this) === false) {
            e.stopEvent();
        }
    }
});
