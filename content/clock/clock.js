class clock {

    constructor(time0, time1, clockSelector) {
        this.time0 = time0;
        this.time1 = time1;
        this.clockSelector = clockSelector;        
        this.update();
    }

    calcTime() {
        const now = this.time1 - moment().valueOf();
        const percentage = ((1 - (now / (this.time1 - this.time0))) * 100).toFixed(1);
        const clock = document.querySelector(this.clockSelector);
        clock.style.width = `${percentage}%`;
        clock.title = `${percentage}%`;
    }

    update() {
        this.calcTime();
        setInterval(()=>{this.calcTime()}, 5000);
    }


}

//TODOS LOS DÍAS
const time0_2 = moment().startOf('day').hours(8).valueOf();
const time1_2 = moment().startOf('day').hours(16);
const c2 = new clock(time0_2, time1_2, "#clock1 .progress");

//TODOS LOS DÍAS
const time0_1 = moment().startOf('day').valueOf();
const time1_1 = moment(time0_1).add(1, 'days').valueOf();
const c1 = new clock(time0_1, time1_1, "#clock2 .progress");

//TODOS LOS AÑOS
const time0_3 = moment().startOf('year').valueOf();
const time1_3 = moment(time0_3).add(1, 'year').valueOf();
const c3 = new clock(time0_3, time1_3, "#clock3 .progress");