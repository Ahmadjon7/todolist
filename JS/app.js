'use strict'

const elForm = document.querySelector('#wrapper-form'),
      elImport = document.querySelector('.text-deker'),
      elInput = document.querySelector('#wrapper-input'),
      elMark = document.querySelector('#wrapper-mark'),
      elDelet = document.querySelector('#btn-delet'),
      elList = document.querySelector('.intro-list');



    
    elInput.addEventListener('focus',()=>{
        if(!elInput.value == 0){
            console.log('hello world')
        }else{
            elMark.classList.add('visibility')
        }
    })
    elMark.addEventListener('click',()=>{
        elInput.value = ''
    })
    elForm.addEventListener('submit',todo)

    function todo(e){
        e.preventDefault()
        const elValue = elInput.value
        if(elValue.trim().length == ''){
            elImport.innerHTML = 'Please fill in the input'
        }else{
            const date = new Date()
            const hours = date.getHours() 
            const amHours = (date.getHours() < 12) ? date.getHours() : date.getHours() - 12
            const minut = date.getMinutes()
            const sekut = date.getSeconds()
            const now = `${hours < 10 ? '0' + hours : hours} : ${minut < 10 ?  '0' + minut : minut} : ${sekut < 10 ? '0' + sekut : sekut }`
            console.log(now)
            const item = document.createElement('li')
            item.className = 'intro-item'
            const div = document.createElement('div')
            div.className = 'wrapper-btns mt-2'
            div.innerHTML =`
            <div class="btn btn-success text-white"><i class="fa-solid fa-circle-check"></i>Complate</div>
            <div class="btn btn-warning text-white"><i class="fa-solid fa-pen-to-square"></i>Edit</div>
            <div class="btn btn-info text-white"><i class="fa-solid fa-clock"></i>${now}</div>
            <div class="btn btn-danger text-white"><i class="fa-solid fa-trash-can"></i>Delete</div>
            `   

            const text = document.createElement('p')
            text.className = 'text-success intro-text p-2'

            text.innerText = elValue

            item.appendChild(text)
            item.appendChild(div)
            elList.prepend(item)
            elInput.value = ''
            elImport.innerHTML = ''
            elMark.classList.remove('visibility')
        }


    }

    elDelet.addEventListener('click',()=>{
        const confirmLengt = confirm('Ishonchingiz komilmi hammsi ochirib tashlashga')
        if(confirmLengt === true){
            elList.innerHTML = ''

        }
        elImport.innerHTML = ''
        elInput.value = ''
    })

    const date = new Date()
    elList.addEventListener('click',(e)=>{

        if(e.target.classList.contains('btn-success')){
            e.target.parentElement.previousSibling.classList.toggle('completed')
        }
        else if(e.target.classList.contains('btn-warning')){
            if(e.target.parentElement.previousSibling.hasAttribute('contenteditable')){
                e.target.parentElement.previousSibling.removeAttribute('contenteditable')
                e.target.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>Edit`
                e.target.style.background ='gold'
            }else{
                e.target.parentElement.previousSibling.setAttribute('contenteditable',true)
                e.target.innerHTML = `<i class="fa-solid fa-check-double"></i>Done`
                e.target.style.background ='purple'
            }
        }
        if(e.target.classList.contains('btn-info')){
            // if(e.target.classList.contains('btn-info')){
                const amHours = `${(date.getHours() < 12) ? date.getHours() : date.getHours() - 12} : ${date.getMinutes() < 10 ?  '0' + date.getMinutes() : date.getMinutes()} : ${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
                e.target.innerHTML = `<i class="fa-solid fa-clock"></i>${amHours}`
            // }
            // else{
            //     const pmHours = `${(date.getHours() < 10) ? '0' + date.getHours() : date.getHours()} : ${date.getMinutes() < 10 ?  '0' + date.getMinutes() : date.getMinutes()} : ${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
            //     e.target.innerHTML = `<i class="fa-solid fa-clock"></i>${pmHours}`
            // }
        }
        else if(e.target.classList.contains('btn-danger')){
           const deletBtn = confirm('Rostan ham ochirasizmi')
           if(deletBtn){
            e.target.parentElement.parentElement.remove()
           }
        }
        
    })
    