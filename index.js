$(document).ready(function () {
    var globalIdx = 0;

    $('#btn1').click(go);
    $('#btn2').click(userClick);

    function go() {
        $('#inp1').focus();
        queueUpTimeouts(1000, 100);
    }

    function userClick() {
        $('#click-idx').text(globalIdx);
        console.log('clicked', globalIdx);
    }

    function queueUpTimeouts(num, miliseconds) {
        populateContainer(num);
        for (var i = 0; i < num; i++) {
            setTimeout(block.bind(null, i, miliseconds), 0);
        }
    }

    function block(idx, miliseconds) {
        globalIdx = idx;
        $('#timeout-idx').text(idx);
        console.log('timeout start', idx);
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
            container.append($('<div>' + i + '</div>'));
        }
    }

    function removeOneItem() {
        $('#container > div').first().remove();
    }
});
