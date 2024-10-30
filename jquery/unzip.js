// Import JSZip if using module-based JavaScript (for npm installs)
import JSZip from "jszip";

// Function to unzip a file
async function unzipFile(file) {
    const zip = new JSZip();

    try {
        // Load the zip file
        const loadedZip = await zip.loadAsync(file);

        // Extract each file
        const extractedFiles = {};
        await Promise.all(
            Object.keys(loadedZip.files).map(async (filename) => {
                const content = await loadedZip.files[filename].async("string"); // 'string' or 'blob' based on your need
                extractedFiles[filename] = content;
            })
        );

        console.log("Extracted Files:", extractedFiles);
        return extractedFiles;
    } catch (err) {
        console.error("Error unzipping file:", err);
        return null;
    }
}

// Usage example:
// Assuming `fileInput` is a file input element
document.getElementById('fileInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const unzippedContent = await unzipFile(file);
        console.log(unzippedContent);
    }
});

