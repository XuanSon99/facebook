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
        let post = document.querySelectorAll(".story_body_container")
        let list = [];
        for (let i = 0; i < post.length; i++) {
            try {
                let message = post[i].querySelector("._5rgt._5nk5._5msi p").textContent || ""
                let url = "https://" + post[i].querySelector("section>div>div").getAttribute("data-store").split("https").filter(item => item.includes("/video"))[0].split('","')[0].slice(5).replaceAll("\\", "")
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

