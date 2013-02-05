(function($, doc) {
if ( !("placeholder" in doc.createElement("input")) ) {
    $(function() {
        // On focus, remove the placeholder text and change the input color
        $("[placeholder]").on("focus", function() {
            var input = $(this);
            if ( this.value === input.attr("placeholder") ) {
                input.val("").css("color", "#333");
            }
        })
        // On blur, if the value is empty, change it to the placeholder text and slightly grey out the text
        .on("blur", function() {
            var input = $(this);
            if ( this.value === "" || this.value === input.attr("placeholder") ) {
                input.val(input.attr("placeholder")).css("color", "#999");
            }
        })
        // Trigger the blur event for all the input fields on page load
        .trigger("blur")
        // When a form is submitted that has an input with placeholder text, don't submit the placeholder text
        .parents("form").submit(function() {
            $(this).find("[placeholder]").val(function(i, val) {
                return val === $(this).attr("placeholder") ? '' : val;
            });
        });
    });
}
})(jQuery, document);
