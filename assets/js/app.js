// const express = require('express')
// const axios = require('axios')
// const app = express()
const contactForm = document.querySelector('.co-form');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let department = document.getElementById('department');
let Projectrunningstatus=document.getElementById('Projectrunningstatus');
let finalyear = document.getElementById('finalyear');
let time = document.getElementById('time');
let message = document.getElementById('message');
if (contactForm) {
    contactForm.addEventListener('click', (e) => {
        e.preventDefault();
        let formData = {
            name: name.value,
            phone: phone.value,
            collegename:collegename.value,
            Projectrunningstatus:Projectrunningstatus.value,
            finalyear:finalyear.value,
            department: department.value,
            time:time.value,
            message: message.value,
        }
        console.log(formData);
        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', 'http://localhost:5000/');
        // xhr.setRequestHeader('content-type', 'application/json');
        // xhr.onload = function () {
        //     console.log(xhr.responseText);
        //     if (xhr.responseText == 'success') {
        //         alert('Email sent');
        //         name.value = '';
        //         email.value = '';
        //         phone.value = '';
        //         department.value = '';
        //         collegename.value = '';
        //         currentyear.value = '';
        //         message.value = '';
        //     }
        //     else {
        //         alert("error");
        //     }
        // }
        // xhr.send(JSON.stringify(formData))
        const sendHttpsRequest = (method,url,data)=>{
            const promise = new Promise((resolve,reject)=>{
                const xhr = new  XMLHttpRequest();
                xhr.open(method,url);
                xhr.responseType='json';
                if(data){
                    xhr.setRequestHeader('content-type', 'application/json');
                }
                xhr.onload=()=>{
                    resolve(xhr.response)
                }
                xhr.send(JSON.stringify(data));
            })
            return promise;
        }
            sendHttpsRequest('POST','https://creatoverse.herokuapp.com/',formData).then(responseData=>{
                alert('Email sent');
                name.value = '';
                phone.value = '';
                department.value = '';
                collegename.value = '';
                message.value = '';
                time.value='';
                finalyear.value='';
                Projectrunningstatus.value='';
            });
        
    })
}
