function setUpEvent(elementSelector, event, callback, args = null) {
    const element = document.querySelector(`${elementSelector}`);
    if (element) {
        element.addEventListener(event, () => {
            callback(args);
        });
    }
}
export default setUpEvent;
