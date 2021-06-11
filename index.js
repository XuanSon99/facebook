function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const post = async () => {
    try {
        let token = document.querySelector("#token").value
        let group_list = document.querySelector("#group_list").value.split("|")
        let content = JSON.parse(document.querySelector("#content").value)
        for (let item of content) {
            for (let id of group_list) {
                axios.post("https://graph.facebook.com/" + id + "/videos", {
                    access_token: token,
                    description: item.message,
                    file_url: item.url
                }).then((res) => {
                    alert("Success with Group ID: " + res.data.id)
                }).catch((error) => {
                    console.log(error);
                })
                await sleep(50000)
            }
        }
    } catch (error) {
        if (confirm("Click oki to see the tutorial")) {
            window.open("https://docs.google.com/document/d/1P0bfxQ9H9Tv9Z6ChdyHso8Rg_spa-LhY68LwR280Qac/edit?usp=sharing")
        }
    }
}
const get_group_list = () => {
    axios.get("https://graph.facebook.com/me/groups", {
        params: {
            access_token: document.querySelector("#token").value
        }
    }).then((res) => {
        alert("Get successful group list")
        let list = []
        for (let item of res.data.data) {
            list.push(item.id)
        }
        document.querySelector("#group_list").value = list.join("|")
    }).catch((error) => {
        console.log(error);
    })
}