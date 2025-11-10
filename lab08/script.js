// script.js
// Simple jQuery-based dice rolling demo.
// Uses the same sprite and background-position logic as your Yatzy assignment.

$(function () {
    // Cache jQuery objects
    const $die    = $('#die');
    const $result = $('#result');
    const $button = $('#btn-roll');

    // Helper that sets the die face using the same math as in Yatzy assignment:
    // offset = -(value - 1) * 100;
    function setFace(value) {
        const offset = -(value - 1) * 100;      // 0%, -100%, -200%, ...
        $die.css('background-position', offset + '% 0');
        $die.attr('aria-label', 'Die showing ' + value);
    }

    // Initialize with 6
    setFace(6);

    // Click handler using jQuery .on()
    $button.on('click', function () {
        // Disable the button while rolling
        $button.prop('disabled', true);

        // Start animation by adding the "rolling" class
        $die.addClass('rolling');

        // Duration should match the CSS animation (700ms)
        setTimeout(function () {
            // Stop animation
            $die.removeClass('rolling');

            // Pick a random value 1–6
            const value = Math.floor(Math.random() * 6) + 1;

            // Show the final face using your background-position logic
            setFace(value);

            // Update text result
            $result.text('You rolled: ' + value);

            // Re-enable the button for the next roll
            $button.prop('disabled', false);
        }, 700);
    });
});