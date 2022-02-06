export class Quotes {

    constructor(public author: string,
        public posterName: string,
        public quote: string,
        public upvoteCount: number = 0,
        public downvoteCount: number = 0,
        public isDetailsShown: boolean = false
    ) { }

    timePosted() {
        return new Date();
    }
}
