var dialogWindow = function(obj, options, modalClass){
    var opts = (function(){
        var o = {};
        for (var i in options) {
            o[i] = options[i];
        }
        return o;
    }());
    var settings = $.extend(
        {
            message: obj,
            cssClass: modalClass,
            type: 'default'
        },
        opts
    );
    var dialog = new BootstrapDialog(settings);
    dialog.realize();
    dialog.getModalHeader().hide();
    dialog.getModalFooter().hide();
    dialog.open();

    return dialog;
};