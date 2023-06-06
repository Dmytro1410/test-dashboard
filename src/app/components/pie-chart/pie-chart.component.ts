import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraphTimeService } from "../../graph-time.service";

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    public pieChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'left',
            },
        }
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
        labels: ['Not Working', 'Working'],
        datasets: [{data: [0, 0]}]
    };
    public pieChartType: ChartType = 'pie';

    constructor(private graphTimeService: GraphTimeService) {
    }

    ngOnInit() {
        this.graphTimeService.graphData.subscribe(({working, notWorking}) => {
            const {workingPercent, notWorkingPercent} = this.getPieValues({working, notWorking})
            this.pieChartData = {
                ...this.pieChartData,
                datasets: [{
                    data: [
                        notWorkingPercent,
                        workingPercent,
                    ]
                }]
            }
        })
    }

    getPieValues({working, notWorking}: { working: number[], notWorking: number[] }) {
        const notWorkingSum = notWorking.reduce((acc, val) => acc += val, 0)
        const workingSum = working.reduce((acc, val) => acc += val, 0)
        const {workingPercent, notWorkingPercent} = this.getPercents({workingSum, notWorkingSum})
        return {workingPercent, notWorkingPercent}
    }

    getPercents({workingSum, notWorkingSum}: { workingSum: number, notWorkingSum: number }) {
        const total = workingSum + notWorkingSum
        const workingPercent = Math.round((workingSum / total * 100) * 100) / 100
        const notWorkingPercent = 100 - workingPercent
        return {workingPercent, notWorkingPercent}
    }
}
