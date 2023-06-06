import { Component, OnInit } from '@angular/core';
import { GraphTimeService } from "./graph-time.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'test-dashboard';
    defaultFrom = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    defaultTo = new Date(Date.now() - 24 * 60 * 60 * 1000)
    dates = {from: this.defaultFrom, to: this.defaultTo}

    public sideNavHovered = false;
    public links = [
        {title: 'Home', icon: 'home'},
        {title: 'Data Tables', icon: 'table_chart'},
        {title: 'Users', icon: 'groups'},
        {title: 'Settings', icon: 'settings'},
    ];
    currentView: string | number = 'all'

    constructor(public graphDataService: GraphTimeService) {
    }

    ngOnInit() {
        this.graphDataService.updateGraphData(this.defaultFrom, this.defaultTo)
    }

    changeView(screen: number) {
        this.currentView = this.currentView===screen ? 'all':screen
    }

    setDate({from, to}: { from?: Date | null, to?: Date | null }) {
        if (from) this.dates.from = new Date(from)
        if (to) this.dates.to = new Date(to)
        if (this.dates.to && this.dates.from) this.graphDataService.updateGraphData(this.dates.from, this.dates.to)
    }


}
