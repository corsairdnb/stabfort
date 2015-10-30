
    var dialogWindow = function(selector){
        var dialog = new BootstrapDialog({
            //message: function(dialogRef){
            //    var $content = $(selector).html();
            //    //var $button = $('<button class="btn btn-primary btn-lg btn-block">Close the dialog</button>');
            //    //$button.on('click', {dialogRef: dialogRef}, function(event){
            //    //    event.data.dialogRef.close();
            //    //});
            //    //$(selector).append($button);
            //    return $content;
            //},
            message: $(selector),
            //closable: false,
            cssClass: 'services-dialog',
            description: 'This is a Bootstrap Dialog',
            type: 'default'
        });
        dialog.realize();
        dialog.getModalHeader().hide();
        dialog.getModalFooter().hide();
        dialog.open();
    };

//dialog.getModalBody().css('background-color', '#0088cc');
//dialog.getModalBody().css('color', '#fff');
