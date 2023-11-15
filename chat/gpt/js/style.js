async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    return response.json();
}
function sendmessge() {
    var text = "";
    var text = document.getElementById('input').value;
    document.getElementById('input').value = "";
    if (text) {
        const items = document.createElement('li');
        items.textContent = text;
        messages.appendChild(items);
        postData("https://api-salari.cyclic.app/", { text: text }).then((data) => {
            var bot = data.message;
            var status = data.status;
            if (status = 200) {
                const item = document.createElement('ul');
                item.textContent = bot;
                messages.appendChild(item);
            }
        });
    }else{
        alert('error');
    }
}
