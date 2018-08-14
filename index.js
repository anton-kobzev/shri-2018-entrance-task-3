function calcPriceTable(rates) {
    const table = []

    for (let i = 0; i < 24; i++) {
        let row = []
        table.push(row)
    }

    for (const rate of rates) {
        table[0].push(rate)
    }

    for (let i = 1; i < 24; i++) {
        for (let j = 0; j < 24; j++) {
            table[i].push(table[i - 1][j] + rates[i + j])
        }
    }

    return table
}

function getModeTimeRange(mode) {
    if (mode == "day") return { from: 7, to: 21 }
    if (mode == "night") return { from: 21, to: 7 }
    return { from: 0, to: 24 }
}

function main(input) {
    const rates = []
    for (const rate of input.rates) {
        for (let i = rate.from; i != rate.to; i == 23 ? i = 0 : i++) {
            rates[i] = rate.value
        }
    }

    const priceTable = calcPriceTable(rates)

    const schedule = {}, schedulePower = []
    for (let i = 0; i < 24; i++) {
        schedule[i] = []
        schedulePower[i] = 0
    }

    const consumedEnergy = { value: 0, devices: {} }

    for (const device of input["devices"]) {
        const { from, to } = getModeTimeRange(device.mode)
        let min = null

        for (let i = from; i != to - device.duration + 1; i == 23 && to < 24 ? i = 0 : i++) {
            if (schedulePower[i] + device.power <= input.maxPower &&
                (min === null || priceTable[device.duration - 1][i] < min.value)) {
                min = { value: priceTable[device.duration - 1][i], from: i }
            }
        }

        for (let i = min.from; i < min.from + device.duration; i++) {
            schedule[i].push(device.id)
            schedulePower[i] += device.power
        }

        const consumed = Math.round(min.value * device.power / 1000 * 100) / 100
        consumedEnergy.value += consumed
        consumedEnergy.devices[device.id] = consumed
    }

    consumedEnergy.value = Math.round(consumedEnergy.value * 100) / 100

    return { schedule, consumedEnergy }
}

module.exports = main;

console.log(main({
    devices: [
        {
            "id": "A",
            "name": "A",
            "power": 100,
            "duration": 1
        },
        {
            "id": "B",
            "name": "B",
            "power": 1000,
            "duration": 2
        }
    ],
    rates: [
        {
            "from": 0,
            "to": 2,
            "value": 1
        },
        {
            "from": 2,
            "to": 4,
            "value": 3
        },
        {
            "from": 4,
            "to": 8,
            "value": 5
        },
        {
            "from": 8,
            "to": 9,
            "value": 10
        },
        {
            "from": 9,
            "to": 0,
            "value": 5
        },
    ],
    "maxPower": 1000
}))