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
    const originalValueInput = $('#original-value');
    const modelValueInput = $('#model-value');
    const brickValueInput = $('#brick-value');
    const scaleInput = $('#scale');

    const calculateFromOriginalValueAndScale = function () {
        modelValueInput.val(originalValueInput.val() / scaleInput.val());
        brickValueInput.val(Math.round(modelValueInput.val() / pinSize));
        addLog('Original Value = ' + originalValueInput.val() + '; Scale = ' + scaleInput.val() +
            ' => Model Value=' + modelValueInput.val() + '; Brick Value=' + brickValueInput.val());
    };

    const calculateFromBrickValueAndScale = function () {
        modelValueInput.val(brickValueInput.val() * pinSize);
        originalValueInput.val(modelValueInput.val() * scaleInput.val());
        addLog('Brick Value = ' + brickValueInput.val() + '; Scale = ' + scaleInput.val() +
            ' => Original Value=' + originalValueInput.val() + '; Model Value=' + modelValueInput.val());
    };

    const addLog = function (content) {
        const log = $('#log');
        if (log.text() === '') {
            log.text(content);
        } else {
            log.text(log.text() + '\n' + content);
        }
    };

    originalValueInput.change(function () {
        if (originalValueInput.val() === '') {
            originalValueInput.focus();
        } else {
            if (scaleInput.val() !== '') {
                calculateFromOriginalValueAndScale();
            } else {
                scaleInput.focus();
            }
        }
    });

    brickValueInput.change(function () {
        if (brickValueInput.val() === '') {
            brickValueInput.focus();
        } else {
            if (scaleInput.val() !== '') {
                calculateFromBrickValueAndScale();
            } else {
                scaleInput.focus();
            }
        }
    });

    scaleInput.change(function () {
        if (scaleInput.val() === '') {
            scaleInput.focus();
        } else {
            if (originalValueInput.val() !== '') {
                calculateFromOriginalValueAndScale();
            } else {
                originalValueInput.focus();
            }
        }
    });
};

$(document).ready(function () {
    initCalculator();
});
