function setUpEvent(elementSelector:string, event:string, callback:Function, args:any = null) {
    const element:Element|null = document.querySelector(`${elementSelector}`);

    if (element) {

        element.addEventListener(event, () => {

            callback(args);

        });
    }

}

export default setUpEvent;