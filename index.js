function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const post = async () => {
    try {
        let tokens = document.querySelector("#token").value.split("|")
        let group_list = document.querySelector("#group_list").value.split("|")
        let content = JSON.parse(document.querySelector("#content").value)
        let notifi = document.querySelector(".notification")
        notifi.style.display = "block"
        for (let i = 0; i < content.length; i++) {
            let group = group_list[Math.floor(Math.random() * group_list.length)]
            let token = tokens[Math.floor(Math.random() * tokens.length)]
            if (!token) {
                return;
            }
            message("start", "Bắt đầu đăng lên group: " + group)
            axios.post("https://graph.facebook.com/" + group + "/videos", {
                access_token: token,
                description: content[i].message,
                file_url: content[i].url
            }).then((res) => {
                message("success", "Thành công post ID: " + res.data.id)
            }).catch((error) => {
                message("error", "Không thành công group: " + group)
            })
            let time = 30
            let cowndown = setInterval(() => {
                time--
                document.querySelector(".notification span").textContent = time + "s"
                if (time == 0) {
                    clearInterval(cowndown)
                    document.querySelector(".notification span").textContent = "Ok"
                }
            }, 1000);
            await sleep(30000)
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
const message = (type, text) => {
    var p = document.createElement("p");
    var content = document.createTextNode(text);
    p.appendChild(content);
    p.classList.add(type)
    var div = document.querySelector(".notification");
    div.appendChild(p);
}

//861527454458605
// EAAAAZAw4FxQIBANPMUs4uRCp2DvkpZB8Bw76Gw1ePjCPiwJnpyDJ3Y4uviLRR29RBmh0NlGbKe5R6tTPcRidfZAweJjnRWCzuP2a6mFfkeLyZADMWMQD3Y6zCHUWYQIEVy26otxDivuTrIuCGdz3nCQgtAFGjR2dIhKw24Ex2nfd2y6t0qPZBJV0lA0WAg2gZD