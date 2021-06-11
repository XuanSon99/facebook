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
        for (let item of content) {
            for (let i = 0; i < group_list.length; i++) {
                let token = tokens[i]
                if (!token) {
                    return;
                }
                message("start", "Bắt đầu đăng lên group: " + group_list[i])
                axios.post("https://graph.facebook.com/" + group_list[i] + "/videos", {
                    access_token: token,
                    description: item.message,
                    file_url: item.url
                }).then((res) => {
                    message("success", "Thành công group: " + res.data.id)
                }).catch((error) => {
                    message("error", "Không thành công group: " + group_list[i])
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
// EAAAAZAw4FxQIBAH1EoDiYSxEUvl8BfqDQ4mr1vGQZA64LDkme9ChbIxmXoAVZAZC58Do2sWB7WabIfFu1HVziq8h6b3mhBRBSBx7BEXPE6hDTw6BUZC40SWjgxm1Y3egei8k4ZBb0LeK9nVT48SCXTYVMtobA8GCaRHSG6L8tG3oj7FVovYuZBgZC8lefX5TDnQZD