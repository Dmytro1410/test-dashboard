import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timerPipe'
})
export class TimerPipePipe implements PipeTransform {

    public seconds = 0
    public minutes = 0
    public hours = 0

    transform(value: number, ...args: ['h' | 'm' | 's']): unknown {
        this.hours = value >= 3600 ? Math.floor(value / 3600):0
        this.minutes = value >= 60 ? Math.floor(value / 60 - this.hours * 60):0
        this.seconds = value - (this.minutes * 60) - (this.hours * 3600)
        return args[0]==='h'
                ? `${this.hours.toString().padStart(2, "0")}`
                :args[0]==='m' ? `${this.minutes.toString().padStart(2, "0")}`
                        :`${this.seconds.toString().padStart(2, "0")}`;
    }

}
