const reactElement = {
    type : "a",
    props : {
        href : "https://sanjayvaland-portfolio.netlify.app/",
        target : "_blank"
    },
    text : "click here to see portfolio"
};

const div = document.querySelector("#root");

function createElement(reactElement,container){
    const a = document.createElement(reactElement.type);
    a.innerHTML = reactElement.text;

    for(prop in reactElement.props)
        {
            a.setAttribute(prop,reactElement.props[prop]);
        }

    container.appendChild(a);
}

createElement(reactElement,div);