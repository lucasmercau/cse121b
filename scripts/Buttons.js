const allButtons = {
    getButtons1(listOfKeys) {
        getButtons1(listOfKeys)
    },
    getButtons2(listOfKeys) {
        getButtons2(listOfKeys)
    },
};

const getButtons1 = (listOfKeys) => {
    listOfKeys.forEach( (key) => {
        let option = document.createElement("option");
        option.textContent = key;
        option.setAttribute("value", key) 
        document.querySelector("#sortBy").appendChild(option); });
}

const getButtons2 = (listOfKeys) => {
    listOfKeys.forEach( (key) => {
        let option = document.createElement("option");
        option.textContent = key;
        option.setAttribute("value", key) 
        document.querySelector("#sortBy2").appendChild(option); });
}

export default allButtons; 