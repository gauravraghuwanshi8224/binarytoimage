var base64 = /*base 64 data*/
            var pdfs = atob(base64);
            var len = pdfs.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = pdfs.charCodeAt(i);
            }
            saveDowloadedData(bytes.buffer,'image');
        function saveDowloadedData(data, filename) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            blob = new Blob([data], { type: "octet/stream" }),
                url = window.URL.createObjectURL(blob);

            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);

        }
