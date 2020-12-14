$(document).ready(function() {
    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('.mask-phone').mask(SPMaskBehavior, spOptions);
    $('.mask-date').mask('00/00/0000', { clearIfNotMatch: true, selectOnFocus: true });
    $('.mask-cpf').mask('000.000.000-00', { reverse: true, clearIfNotMatch: true, selectOnFocus: true });
    $('.mask-cep').mask('00000-000', { clearIfNotMatch: true, selectOnFocus: true });
    $('.mask-creditCardDate').mask('00/00', { clearIfNotMatch: true, selectOnFocus: true });
    $('.mask-money').mask("#.##0,00", { clearIfNotMatch: true, reverse: true });
    $('.mask-percent').mask("##0.0", { clearIfNotMatch: true, reverse: true });
    $(".mask-username").mask("0000000000", { "translation": { 0: { pattern: /[A-Za-z0-9]/ } } });
    $(".mask-password").mask("000000000000", { "translation": { 0: { pattern: /[A-Za-z0-9]/ } } });
    //$(".mask-password").mask("000000000000", {"translation": {0: {pattern: /[A-Za-z0-9!ยก$%&/]/}}});
});