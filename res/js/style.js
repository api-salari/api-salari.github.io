document.getElementById('form-msg').addEventListener("submit", function(event){
    let msg = document.getElementById("message").value;
    var text_send = "💬 | #پیام_جدید \n متن پیام:\n " + String(msg);
    $.ajax({
        type:'post',
        mode: "cors",
        cache: "no-cache",
        url:"https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage",
        data:{chat_id:"915303220", text:text_send},
    });

})