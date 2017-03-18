$(document).ready(function () {
    var timeoutIdx = 0,
        clickIndex = 0,
        intIndex = 0;

    $('#btn1').click(go);
    $('#btn3').click(goClick);
    $('#btn2').click(userClick);
    $('#btn4').click(startInterval);

    function go() {
        $('#inp1').focus();
        var delay = parseInt($('#inp_delay').val());
        var iter = parseInt($('#inp_iter').val());
        queueUpTimeouts(iter, delay);
    }

    function goClick() {
        var delay = parseInt($('#inp_delay2').val());
        var index = clickIndex++;
        $('#click-idx2').text(index);
        console.log('click start', index);
        addOneItem(index);
        block(delay);
    }

    function userClick() {
        $('#click-idx').text(timeoutIdx);
        console.log('clicked', timeoutIdx);
    }

    function startInterval() {
        setInterval(function () {
            var index = intIndex++;
            $('#interval-idx').text(index);
            console.log('interval', index);
        }, 1000);
    }

    function queueUpTimeouts(num, delay) {
        populateContainer(num);
        for (var i = 0; i < num; i++) {
            setTimeout(function () {
                startTimeout(delay);
            }, 0);
        }
    }

    function startTimeout(delay) {
        var index = timeoutIdx++;
        console.log('timeout start', index);
        $('#timeout-idx').text(index);
        block(delay);
        removeOneItem();
    }

    function block(delay) {
        var d1 = new Date(), d2;
        while (true) {
            d2 = new Date();
            if ((d2 - d1) >= delay) {
            break;
            }
        }
    }

    function populateContainer(items) {
        $('#container').empty();
        for (var i = 0; i < items; i++) {
            addOneItem(i);
        }
    }

    function removeOneItem() {
        $('#container > div').first().remove();
    }

    function addOneItem(idx) {
        $('#container').append($('<div>' + idx + '</div>'));
    }
});
