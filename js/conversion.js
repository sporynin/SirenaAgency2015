window.addEventListener("load", function() {
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
});
