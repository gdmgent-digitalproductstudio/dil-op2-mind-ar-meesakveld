const markerFiles = [
	"greek-person.png",
	"lyre.png",
	"parthenon.png",
	"spartan-helmet.png",
];

const downloadButton = document.getElementById("downloadMarkers");

const loadJsZip = () => {
	if (window.JSZip) {
		return Promise.resolve(window.JSZip);
	}

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js";
		script.onload = () => resolve(window.JSZip);
		script.onerror = () => reject(new Error("Kon JSZip niet laden"));
		document.head.appendChild(script);
	});
};

const fetchMarkerBlob = async (fileName) => {
	const fileUrl = `./markers/${encodeURIComponent(fileName)}`;
	const response = await fetch(fileUrl);

	if (!response.ok) {
		throw new Error(`Kon bestand niet ophalen: ${fileName}`);
	}

	return response.blob();
};

const downloadBlob = (blob, fileName) => {
	const blobUrl = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = blobUrl;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	setTimeout(() => {
		URL.revokeObjectURL(blobUrl);
	}, 1000);
};

const downloadMarkersAsZip = async () => {
	const JSZip = await loadJsZip();
	const zip = new JSZip();

	for (const fileName of markerFiles) {
		const blob = await fetchMarkerBlob(fileName);
		zip.file(fileName, blob);
	}

	const zipBlob = await zip.generateAsync({ type: "blob" });
	downloadBlob(zipBlob, "markers.zip");
};

if (downloadButton) {
	downloadButton.addEventListener("click", async () => {
		downloadButton.disabled = true;
		const originalText = downloadButton.textContent;
		downloadButton.textContent = "ZIP maken...";

		try {
			await downloadMarkersAsZip();
		} catch (error) {
			console.error(error);
		} finally {
			downloadButton.disabled = false;
			downloadButton.textContent = originalText;
		}
	});
}
