const main = require("./index");

const testCases = [
    {
        description: "Пример из условия",
        input: {
            "devices": [
                {
                    "id": "F972B82BA56A70CC579945773B6866FB",
                    "name": "Посудомоечная машина",
                    "power": 950,
                    "duration": 3,
                    "mode": "night"
                },
                {
                    "id": "C515D887EDBBE669B2FDAC62F571E9E9",
                    "name": "Духовка",
                    "power": 2000,
                    "duration": 2,
                    "mode": "day"
                },
                {
                    "id": "02DDD23A85DADDD71198305330CC386D",
                    "name": "Холодильник",
                    "power": 50,
                    "duration": 24
                },
                {
                    "id": "1E6276CC231716FE8EE8BC908486D41E",
                    "name": "Термостат",
                    "power": 50,
                    "duration": 24
                },
                {
                    "id": "7D9DC84AD110500D284B33C82FE6E85E",
                    "name": "Кондиционер",
                    "power": 850,
                    "duration": 1
                }
            ],
            "rates": [
                {
                    "from": 7,
                    "to": 10,
                    "value": 6.46
                },
                {
                    "from": 10,
                    "to": 17,
                    "value": 5.38
                },
                {
                    "from": 17,
                    "to": 21,
                    "value": 6.46
                },
                {
                    "from": 21,
                    "to": 23,
                    "value": 5.38
                },
                {
                    "from": 23,
                    "to": 7,
                    "value": 1.79
                }
            ],
            "maxPower": 2100
        },
        output: {
            schedule:
            {
                '0':
                    ['F972B82BA56A70CC579945773B6866FB',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E',
                        '7D9DC84AD110500D284B33C82FE6E85E'],
                '1':
                    ['F972B82BA56A70CC579945773B6866FB',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '2':
                    ['F972B82BA56A70CC579945773B6866FB',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '3':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '4':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '5':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '6':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '7':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '8':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '9':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '10':
                    ['C515D887EDBBE669B2FDAC62F571E9E9',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '11':
                    ['C515D887EDBBE669B2FDAC62F571E9E9',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '12':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '13':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '14':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '15':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '16':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '17':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '18':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '19':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '20':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '21':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '22':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '23':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E']
            },
            consumedEnergy:
            {
                value: 38.94,
                devices:
                {
                    F972B82BA56A70CC579945773B6866FB: 5.1,
                    C515D887EDBBE669B2FDAC62F571E9E9: 21.52,
                    '02DDD23A85DADDD71198305330CC386D': 5.4,
                    '1E6276CC231716FE8EE8BC908486D41E': 5.4,
                    '7D9DC84AD110500D284B33C82FE6E85E': 1.52
                }
            }
        }
    },
    {
        description: "Пример из условия, но в начале дня очень дорогая электроэнергия",
        input: {
            "devices": [
                {
                    "id": "F972B82BA56A70CC579945773B6866FB",
                    "name": "Посудомоечная машина",
                    "power": 950,
                    "duration": 3,
                    "mode": "night"
                },
                {
                    "id": "C515D887EDBBE669B2FDAC62F571E9E9",
                    "name": "Духовка",
                    "power": 2000,
                    "duration": 2,
                    "mode": "day"
                },
                {
                    "id": "02DDD23A85DADDD71198305330CC386D",
                    "name": "Холодильник",
                    "power": 50,
                    "duration": 24
                },
                {
                    "id": "1E6276CC231716FE8EE8BC908486D41E",
                    "name": "Термостат",
                    "power": 50,
                    "duration": 24
                },
                {
                    "id": "7D9DC84AD110500D284B33C82FE6E85E",
                    "name": "Кондиционер",
                    "power": 850,
                    "duration": 1
                }
            ],
            "rates": [
                {
                    "from": 7,
                    "to": 10,
                    "value": 6.46
                },
                {
                    "from": 10,
                    "to": 17,
                    "value": 5.38
                },
                {
                    "from": 17,
                    "to": 21,
                    "value": 6.46
                },
                {
                    "from": 21,
                    "to": 23,
                    "value": 5.38
                },
                {
                    "from": 23,
                    "to": 0,
                    "value": 1.79
                },
                {
                    "from": 0,
                    "to": 1,
                    "value": 10
                },
                {
                    "from": 1,
                    "to": 7,
                    "value": 1.79
                }
            ],
            "maxPower": 2100
        },
        output: {
            schedule:
            {
                '0': [
                    '02DDD23A85DADDD71198305330CC386D',
                    '1E6276CC231716FE8EE8BC908486D41E'
                ],
                '1': [
                    'F972B82BA56A70CC579945773B6866FB',
                    '02DDD23A85DADDD71198305330CC386D',
                    '1E6276CC231716FE8EE8BC908486D41E',
                    '7D9DC84AD110500D284B33C82FE6E85E'
                ],
                '2': [
                    'F972B82BA56A70CC579945773B6866FB',
                    '02DDD23A85DADDD71198305330CC386D',
                    '1E6276CC231716FE8EE8BC908486D41E'
                ],
                '3':
                    ['F972B82BA56A70CC579945773B6866FB',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '4':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '5':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '6':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '7':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '8':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '9':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '10':
                    ['C515D887EDBBE669B2FDAC62F571E9E9',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '11':
                    ['C515D887EDBBE669B2FDAC62F571E9E9',
                        '02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '12':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '13':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '14':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '15':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '16':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '17':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '18':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '19':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '20':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '21':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '22':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E'],
                '23':
                    ['02DDD23A85DADDD71198305330CC386D',
                        '1E6276CC231716FE8EE8BC908486D41E']
            },
            consumedEnergy:
            {
                value: 39.76,
                devices:
                {
                    'F972B82BA56A70CC579945773B6866FB': 5.1,
                    'C515D887EDBBE669B2FDAC62F571E9E9': 21.52,
                    '02DDD23A85DADDD71198305330CC386D': 5.81,
                    '1E6276CC231716FE8EE8BC908486D41E': 5.81,
                    '7D9DC84AD110500D284B33C82FE6E85E': 1.52
                }
            }
        }
    },
    {
        description: 
            "Вычисленное время работы прибора не выходит за установленные рамки времени суток, даже если так выгоднее",
        input: {
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
                },
                {
                    "id": "C",
                    "name": "C",
                    "power": 1300,
                    "duration": 13,
                    "mode": "day"
                },
                {
                    "id": "D",
                    "name": "D",
                    "power": 1300,
                    "duration": 2,
                    "mode": "day"
                },
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
            "maxPower": 3000
        },
        output: {
            schedule:
            {
                '0': ['A', 'B'],
                '1': ['B'],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': ['C'],
                '8': ['C'],
                '9': ['C', 'D'],
                '10': ['C', 'D'],
                '11': ['C'],
                '12': ['C'],
                '13': ['C'],
                '14': ['C'],
                '15': ['C'],
                '16': ['C'],
                '17': ['C'],
                '18': ['C'],
                '19': ['C'],
                '20': [],
                '21': [],
                '22': [],
                '23': []
            },
            consumedEnergy: { value: 106.1, devices: { A: 0.1, B: 2, C: 91, D: 13 } }
        }
    }
]

for (const testCase of testCases) {
    test(testCase.description, () => {
        expect(main(testCase.input)).toEqual(testCase.output)
    })
}