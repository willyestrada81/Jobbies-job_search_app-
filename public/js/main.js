const desc = document.getElementsByClassName('description');
const readMore = document.getElementsByClassName('read-more');
const icon = document.getElementsByTagName('i')
const saveBtn = document.getElementById('save-btn');

function expand () {
    for (let i = 0; i < readMore.length; i++) {
        const btn = document.getElementsByClassName('read-more')[i];
        console.log(btn.id)
        readMore[i].addEventListener('click', () => {
            if (desc[i].style.display === 'none') {
                desc[i].style.display = "block";
                btn.getElementsByTagName('button')[0].innerText = 'Read Less'
                btn.innerHTML = "\n                <button class=\"btn btn-reverse\">Read Less\n                    <i class=\"fas fa-chevron-circle-up\" aria-hidden=\"true\"></i>\n                </button>\n            "

            } else {
                desc[i].style.display = "none";
                btn.getElementsByTagName('button')[0].innerText = 'Read More'
                btn.innerHTML = "\n                <button class=\"btn btn-reverse\">Read More\n                    <i class=\"fas fa-chevron-circle-down\" aria-hidden=\"true\"></i>\n                </button>\n            "
            }

        })

    }
}
   

saveBtn.addEventListener('click', () => {
    saveBtn.className = 'fas fa-heart'
})



