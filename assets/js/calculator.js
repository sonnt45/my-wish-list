// Restricts input for the set of matched elements to the given inputFilter function.
// https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery
(function ($) {
    $.fn.inputFilter = function (callback, errMsg) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop focusout", function (e) {
            if (callback(this.value)) {
                // Accepted value
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    $(this).removeClass("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                $(this).addClass("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    };
}(jQuery));

const initCalculator = function () {
    $('input.numeric').inputFilter(function (value) {
        /*
         * Allow 1 and 1.2:                 (?<=^| )\d+(\.\d+)?(?=$| )
         * Allow 1, 1.2 and .1:             (?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$| )
         * Allow 1.2 (only floats):         (?<=^| )\d+\.\d+(?=$| )
         * Reference: https://stackoverflow.com/questions/5570820/regex-allow-digits-and-a-single-dot
         */
        return /(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$| )/.test(value);
    }, "Only digits allowed");

    const pinSize = 8;
    const modeSelect = $('#mode');
    const originalValueInput = $('#original-value');
    const modelValueInput = $('#model-value');
    const brickValueInput = $('#brick-value');
    const scaleInput = $('#scale');
    const calculateButton = $('#calculate-button');
    const logArea = $('#log textarea');

    const calculateFromOriginalValueAndScale = function () {
        if (originalValueInput.val() === '') {
            originalValueInput.focus();
        } else if (scaleInput.val() === '') {
            scaleInput.focus();
        } else {
            modelValueInput.val(originalValueInput.val() / scaleInput.val());
            brickValueInput.val(Math.round(modelValueInput.val() / pinSize));
            addLog('OriginalValue=' + originalValueInput.val() + '; Scale=' + scaleInput.val() +
                ' => ModelValue=' + modelValueInput.val() + '; BrickValue=' + brickValueInput.val());
        }
    };

    const calculateFromBrickValueAndScale = function () {
        if (brickValueInput.val() === '') {
            brickValueInput.focus();
        } else if (scaleInput.val() === '') {
            scaleInput.focus();
        } else {
            modelValueInput.val(brickValueInput.val() * pinSize);
            originalValueInput.val(modelValueInput.val() * scaleInput.val());
            addLog('BrickValue=' + brickValueInput.val() + '; Scale=' + scaleInput.val() +
                ' => OriginalValue=' + originalValueInput.val() + '; ModelValue=' + modelValueInput.val());
        }
    };

    const addLog = function (content) {
        if (logArea.text() === '') {
            logArea.text(content);
        } else {
            logArea.text(logArea.text() + '\n' + content);
        }
    };

    modeSelect.change(function () {
        switch (modeSelect.val()) {
            case '1':
                originalValueInput.removeAttr('disabled');
                modelValueInput.attr('disabled', 'disabled');
                brickValueInput.attr('disabled', 'disabled');
                scaleInput.removeAttr('disabled');
                calculateButton.removeAttr('disabled');
                break;
            case '2':
                originalValueInput.removeAttr('disabled');
                modelValueInput.attr('disabled', 'disabled');
                brickValueInput.removeAttr('disabled');
                scaleInput.attr('disabled', 'disabled');
                calculateButton.removeAttr('disabled');
                break;
            case '3':
                originalValueInput.attr('disabled', 'disabled');
                modelValueInput.attr('disabled', 'disabled');
                brickValueInput.removeAttr('disabled');
                scaleInput.removeAttr('disabled');
                calculateButton.removeAttr('disabled');
                break;
            default:
                originalValueInput.attr('disabled', 'disabled');
                modelValueInput.attr('disabled', 'disabled');
                brickValueInput.attr('disabled', 'disabled');
                scaleInput.attr('disabled', 'disabled');
                calculateButton.attr('disabled', 'disabled');
        }
    });

    calculateButton.click(function () {
        switch (modeSelect.val()) {
            case '1':
                calculateFromOriginalValueAndScale();
                break;
            case '2':
                break;
            case '3':
                calculateFromBrickValueAndScale();
                break;
        }
    });
};

$(document).ready(function () {
    initCalculator();
});
