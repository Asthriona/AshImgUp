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
            let div = document.querySelector('div');
            let link = document.createElement('a');
            let linkText = document.createTextNode('Here is your link! :)')
            link.href = 'http://rev.asthriona.com:3000/img/'+json.fileName;
            link.appendChild(linkText)
            div.appendChild(link)
        })
        .catch(err => console.log(err));
    }
})