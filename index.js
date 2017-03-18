$(document).ready(function () {
    $('#btn1').click(go);

    function go() {
        $('#inp1').focus();
        queueUpTimeouts(1000, 10);
    }

    function queueUpTimeouts(num, miliseconds) {
        populateContainer(num);
        for (var i = 0; i < num; i++) {
            setTimeout(block.bind(null, miliseconds), 0);
        }
    }

    function block(miliseconds) {
        //console.log('start block');
        var d1 = new Date(), d2;
        while (true) {
            d2 = new Date();
            if ((d2 - d1) >= miliseconds) {
            break;
            }
        }
        removeOneItem();
        //console.log('end block');
    }

    function populateContainer(items) {
        var container = $('#container');
        container.empty();
        for (var i = 0; i < items; i++) {
            container.append($('<div></div>'));
        }
    }

    function removeOneItem() {
        $('#container > div').first().remove();
    }
});
