const minutesMin = 0
const minutesMax = 60
const hoursMin = 0
const hoursMax = 24

const generateRandomVal = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1) + min)

const HOURS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
const MINUTES_WORKS = HOURS.map(() => generateRandomVal(minutesMin, minutesMax))
const MINUTES_NOT_WORKS = MINUTES_WORKS.map(minutes => 60 - minutes)

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', "Sun"]
const HOURS_WORKING = WEEK_DAYS.map(() => generateRandomVal(hoursMin, hoursMax))
const HOURS_NOT_WORKING = HOURS_WORKING.map(hours => 24 - hours)
// debugger

export const CHART_TIME_FRAMES = {
    DAYS: {scaleY: {min: minutesMin, max: minutesMax}, x: HOURS, y1: MINUTES_NOT_WORKS, y2: MINUTES_WORKS},
    WEEKS: {scaleY: {min: hoursMin, max: hoursMax}, x: WEEK_DAYS, y1: HOURS_NOT_WORKING, y2: HOURS_WORKING}
}



