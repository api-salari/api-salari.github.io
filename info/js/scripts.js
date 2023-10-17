document.getElementById('Form-msg').addEventListener("submit", function(event){
    var data = document.getElementById("data").value;
    var text_send = "💬 | #پیام_جدید \n متن پیام:\n\n " + String(data);
    $.ajax({
        type:'post',
        mode: "cors",
        cache: "no-cache",
        url:"https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage",
        data:{chat_id:"915303220", text:text_send},
    });


})
