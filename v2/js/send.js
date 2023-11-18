function sendmessage(text) {
    $.ajax({
        type: 'post',
        mode: "cors",
        cache: "no-cache",
        url: "https://api-salari.cyclic.app/post/sendmsg",
        data: { "text": String(text)},
    });
}

