export class xTimer {

    constructor() {
        this.offset = 0;
        this.seconds = 0;
        this.interval = null;
        this.running = false;
        this.history = []
    }

    start(start_at) {
        let start = start_at ? new Date(start_at) : new Date();

        this.history.push({
            action: 'start',
            date: start.toISOString()
        });

        if( this.running !== true ){
            this.running = true;
            const startDate = start;

            this.interval = setInterval( ()=>{
                const currentDate = new Date();
                this.seconds = parseInt((currentDate - startDate) / 1000);
            }, 1000)
        }
    }

    stop() {
        this.history.push({
            action: 'stop',
            date: new Date().toISOString()
        });

        clearInterval(this.interval);
        this.offset = this.offset + this.seconds;
        this.seconds = 0;

        this.running = false;
    }

    add(seconds) {
        this.history.push({
            action: 'add',
            value: seconds
        });

        this.offset = this.offset + seconds
    }

    elapsed () {
        return this.offset + this.seconds;
    }

    display() {
        var date = new Date(null);
        date.setSeconds( this.elapsed() );

        var result = date.toISOString().substr(11, 8);
        return result
    }

    reset() {
        this.history.push({
            action: 'reset',
            date: new Date().toISOString()
        });

        clearInterval(this.interval);

        this.offset = 0;
        this.seconds = 0;
        this.running = false;
    }
}
