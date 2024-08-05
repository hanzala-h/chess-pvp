function render(res, content, title, user=null, layout='layout'){
    title = (typeof title === 'undefined') ? 'Document' : setTitle(title);
    res.render(layout, {content, title, user});
}

function setTitle(title){
    return `${title} | `;
}

module.exports = { render };