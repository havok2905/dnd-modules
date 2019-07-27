class HomePageTile {
    public backgroundClassName: string;
    public redirectRoute: string;
    public text: string;

    constructor(
        backgroundClassName: string,
        redirectRoute: string,
        text: string
    ) {
        this.backgroundClassName = backgroundClassName;
        this.redirectRoute = redirectRoute;
        this.text = text;
    }
}

export { HomePageTile };
