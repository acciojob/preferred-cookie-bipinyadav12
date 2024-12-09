function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
        }

        // Helper function to get cookies
        function getCookie(name) {
            const cookies = document.cookie.split('; ');
            for (let cookie of cookies) {
                const [key, value] = cookie.split('=');
                if (key === name) return value;
            }
            return null;
        }

        // Apply saved preferences on page load
        window.onload = function () {
            const savedFontSize = getCookie('fontSize');
            const savedFontColor = getCookie('fontColor');

            if (savedFontSize) {
                document.body.style.fontSize = `${savedFontSize}px`;
                document.getElementById('fontSize').value = savedFontSize;
            }

            if (savedFontColor) {
                document.body.style.color = savedFontColor;
                document.getElementById('fontColor').value = savedFontColor;
            }
        };

        // Save preferences when the Save button is clicked
        document.getElementById('saveButton').addEventListener('click', function () {
            const fontSize = document.getElementById('fontSize').value;
            const fontColor = document.getElementById('fontColor').value;

            if (fontSize >= 8 && fontSize <= 72) {
                setCookie('fontSize', fontSize, 365);
                setCookie('fontColor', fontColor, 365);

                document.body.style.fontSize = `${fontSize}px`;
                document.body.style.color = fontColor;

                alert('Preferences saved!');
            } else {
                alert('Font size must be between 8 and 72.');
            }
        });

