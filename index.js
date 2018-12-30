//Selecting element
let form = document.querySelector('#new_friend')
let input = document.querySelector('#friend_name')
let output = document.querySelector('#friend-output')


form.addEventListener('submit', function(e){
    e.preventDefault()

    //create new li element after submit
    let li = '<li class="list-group-item">' + input.value + '</li>'
    
    //show element under ul
    output.insertAdjacentHTML('afterbegin', li)

    //clear input after submit
    input.value = ''
})
