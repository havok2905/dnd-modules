class DmBinderTile {
    public redirectRoute: string;
    public text: string;
    public image: any;

    constructor(redirectRoute: string, text: string, image: any) {
        this.redirectRoute = redirectRoute;
        this.text = text;
        this.image = image;
    }
}

export { DmBinderTile };
