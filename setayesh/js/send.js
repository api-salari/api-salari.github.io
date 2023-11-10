function sendmessage(text) {
    $.ajax({
        type: 'post',
        mode: "cors",
        cache: "no-cache",
        url: "https://harfeto.timefriend.net/harfeto/sendMsg",
        data: { text: String(text) , id: "16989055446752"},
    });
}

