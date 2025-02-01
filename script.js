var editable_tags = document.querySelectorAll('p');

editable_tags.forEach(tag => {
    tag.setAttribute("contenteditable", "true")
});