//$(function(){

    var dialogWindow = function(selector){
        var dialog = new BootstrapDialog({
            message: function(dialogRef){
                var $content = $(selector).html();
                //var $button = $('<button class="btn btn-primary btn-lg btn-block">Close the dialog</button>');
                //$button.on('click', {dialogRef: dialogRef}, function(event){
                //    event.data.dialogRef.close();
                //});
                //$(selector).append($button);

                return $content;
            },
            //closable: false,
            cssClass: 'services-dialog',
            description: 'This is a Bootstrap Dialog'
        });
        dialog.realize();
        dialog.getModalHeader().hide();
        dialog.getModalFooter().hide();
    };

//dialog.getModalBody().css('background-color', '#0088cc');
//dialog.getModalBody().css('color', '#fff');

//});