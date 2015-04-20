function emptyTag(tagId) {
    var myNode = document.getElementById(tagId);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

window.addEventListener('slideenter', function(e) {
    if (e.slideNumber === 11 || e.slideNumber === 12) {
        // запускаем анимацию на каждом входе в слайд
        var tags = ['conversion1', 'risk1', 'conversion2', 'risk2', 'conversion3', 'risk3'];
        for (var i = tags.length; i--; ) {
            // очистим содержимое svg-тэгов, чтобы они не были уже заполненными
            emptyTag(tags[i]);
        }

        var cons = liquidFillGaugeDefaultSettings();
        cons.waveAnimateTime = 10000;
        var risks = liquidFillGaugeDefaultSettings();
        risks.waveAnimateTime = 10000;
        risks.circleColor = 'red';
        risks.waveColor = 'red';
        loadLiquidFillGauge("conversion1", 95, cons);
        loadLiquidFillGauge("risk1", 95, risks);
        loadLiquidFillGauge("conversion2", 75, cons);
        loadLiquidFillGauge("risk2", 0, risks);
        loadLiquidFillGauge("conversion3", 93, cons);
        loadLiquidFillGauge("risk3", 10, risks);
    }
});
