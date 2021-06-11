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
                setInterval(() => {
                    time--
                    document.querySelector(".notification span").textContent = time + "s"
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
// EAAAAZAw4FxQIBAD5XzctogKpQIiOZAvf4A9Jbs6Hw4f2TqUFA38KIHXEKefrgMVdO4ZB1OpBW2rhWWQtiRjpTufzxjyRruFmwUUZBUaPv4CrL3ZAHtD4w8ZAZB0hmjZBvXQHfbBax8HXmG90LYI4p0ZCZCSNLGG73WytyHq5XP08jWb8V3vEDH2xJR5rNlJ0jGyksZD|EAAAAZAw4FxQIBACM1uZCY0gcbDXLPvRQMiwrreModKaoXkMZA33oTxT45tOkj7yEa398BytMtoPDgxYyugZAJgZA6MuZCGLkTRdC3RTduyd57IbO4PIZArNhVZB8zpZB3HXCeDhTsOkXpDhTTZBNfMCjsEynXO8EEy0x3qleTZCHR10MTobt60e6j7HlPCD3W4dV6oZD