function copyToClipboard() {
            // Get the data to copy
            var data = document.getElementById("dataToCopy").innerText;

            // Create a temporary textarea element
            var tempTextarea = document.createElement("textarea");
            tempTextarea.value = data;
            document.body.appendChild(tempTextarea);

            // Select the text and copy it to clipboard
            tempTextarea.select();
            document.execCommand("copy");

            // Remove the temporary element
            document.body.removeChild(tempTextarea);
 }

