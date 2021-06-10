javascript: void (function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function run() {
        let n = prompt("Thời gian copy (s): ")
        if (!n) return;
        for (let i = 0; i < n; i++) {
            window.scrollTo(0, i * 1000);
            await sleep(1000);
        }
        await sleep(1000);
        let post = document.querySelectorAll("div[role='feed']>div")
        let list = [];
        for (let i = 0; i < post.length; i++) {
            try {
                let message = post[i].querySelector("div[data-ad-preview='message']").textContent
                let url = post[i].querySelector("img.i09qtzwb.n7fi1qx3.datstx6m.pmk7jnqg.j9ispegn.kr520xx4.k4urcfbm").getAttribute("src")
                list.push({
                    id: i,
                    message: message,
                    url: url
                });
            } catch (error) { }
        }
        await sleep(1000);
        exportToJsonFile(list)
    }
    function exportToJsonFile(jsonData) {
        let dataStr = JSON.stringify(jsonData);
        let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        let exportFileDefaultName = 'data.json';
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
    run()
})();

// let post = document.querySelectorAll(".rq0escxv.rj1gh0hx.buofh1pr.ni8dbmo4.stjgntxs.l9j0dhe7")
// let src = post[i].querySelector("img").getAttribute("src")

// getBlob(src).then(function (blob) {
//     const a = document.createElement("a");
//     document.body.appendChild(a);
//     const url = window.URL.createObjectURL(blob);
//     a.href = url;
//     a.download = i;
//     a.click();
//     window.URL.revokeObjectURL(url);
//     document.body.removeChild(a);
// });

// function getBlob(url) {
//     return fetch(url).then(function (response) { return response.blob(); })
// }

