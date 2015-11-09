var DialogWindow = function(obj){

    return (function(obj){
        var dialog = {};
        var dialogObject = obj;

        dialog.show = function(options, modalClass){
            var opts = (function(){
                var o = {};
                for (var i in options) {
                    o[i] = options[i];
                }
                return o;
            }());
            var settings = $.extend(
                {
                    message: dialogObject.find('.services-dialog-wrapper'),
                    cssClass: modalClass,
                    type: 'default'
                },
                opts
            );
            var plugin = new BootstrapDialog(settings);

            plugin.realize();
            plugin.getModalHeader().html(dialogObject.find('.services-filter'));
            plugin.getModalFooter().hide();
            plugin.open();

            return plugin;
        };

        return dialog;
    })(obj);

};