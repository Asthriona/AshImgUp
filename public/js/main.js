let uploadbtn = document.getElementById('upload-btn');

uploadbtn.addEventListener('click', ()=>{
    let input = document.querySelector('input');
    if(input.value.length === 0){
        alert("Please upload a file.")
    }else{
        let formData = new FormData();
        formData.append('photo', input.files[0])
        fetch('http://rev.asthriona.com:3000/upload',{
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(json =>{
            console.log(json);
            document.querySelector('form').reset();
            let div = document.querySelector('div.img');
            let link = document.createElement('a');
            let linkText = document.createTextNode('Here is your link! :)')
            link.href = 'http://aiu.asthriona.com/upload'+json.fileName;
            link.appendChild(linkText)
            div.appendChild(link)
        })
        .catch(err => console.log(err));
    }
})


//Footer code
var oldTime = new Date('2019/11/11 19:04:00');
var timer = setInterval(function () {
  var nowTime = new Date();
  var longTime = nowTime - oldTime;
  var days = parseInt(longTime / 1000 / 60 / 60 / 24, 10);
  var hours = parseInt(longTime / 1000 / 60 / 60 % 24, 10);
  var minutes = parseInt(longTime / 1000 / 60 % 60, 10);
  var seconds = parseInt(longTime / 1000 % 60, 10);
  $('.uptime').html(longTime = days + " Days " + hours + " Hours " + minutes + " Minutes and " + seconds + " seconds");
}, 1000);