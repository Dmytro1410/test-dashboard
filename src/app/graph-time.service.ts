import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GraphTimeService {

    graphData: BehaviorSubject<any> = new BehaviorSubject([])

    constructor() {
    }

    updateGraphData(from: Date, to: Date) {
        const daysCount = (to.getTime() - from.getTime()) / (1000 * 3600 * 24);
        const res: any = {
            working: [],
            notWorking: [],
            dates: [],
            percentage: []
        }
        for (let i = 0; i <= daysCount; i++) {
            let day = ''
            if (i===0) {
                day = `${new Date(from).getMonth() + 1}/${new Date(from).getDate()}`
            } else {
                day = `${new Date(from.getTime() + (i * 24 * 60 * 60 * 1000)).getMonth() + 1}/${new Date(from.getTime() + (i * 24 * 60 * 60 * 1000)).getDate()}`
            }
            const working = Math.floor(Math.random() * 25)
            const notWorking = 24 - working
            res.dates.push(day)
            res.working.push(working)
            res.notWorking.push(notWorking)
        }
        this.graphData.next(res)
    }
}
