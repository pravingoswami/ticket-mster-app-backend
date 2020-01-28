const tickets = [
    {
        "isResolved": false,
        "createdAt": "2020-01-08T05:05:22.080Z",
        "_id": "5e1563129bb3c7618827bfcc",
        "employees": [
            {
                "_id": "5e155a9b25294538cc8dd316",
                "name": "e1"
            },
            {
                "_id": "5e1560a8c4a54236a091e06c",
                "name": "e2"
            }
        ],
        "code": "101",
        "priority": "Medium",
        "customer": {
            "_id": "5e1470b6df00c5418c1631a3",
            "name": "c2"
        },
        "department": {
            "_id": "5e148fd3f5f7e463dc1ac9a6",
            "name": "travel"
        },
        "message": "new is off",
        "__v": 0
    },
    {
        "isResolved": false,
        "createdAt": "2020-01-08T05:06:01.539Z",
        "_id": "5e15633b0dbb78636cc53f5e",
        "employees": [
            {
                "_id": "5e155a9b25294538cc8dd316",
                "name": "e1"
            },
            {
                "_id": "5e1560a8c4a54236a091e06c",
                "name": "e2"
            }
        ],
        "code": "101",
        "priority": "High",
        "customer": {
            "_id": "5e1470b6df00c5418c1631a3",
            "name": "c2"
        },
        "department": {
            "_id": "5e148fd3f5f7e463dc1ac9a6",
            "name": "travel"
        },
        "message": "new is off",
        "__v": 0
    },
    {
        "isResolved": false,
        "createdAt": "2020-01-08T05:06:01.539Z",
        "_id": "5e1563430dbb78636cc53f5f",
        "employees": [
            {
                "_id": "5e155a9b25294538cc8dd316",
                "name": "e1"
            },
            {
                "_id": "5e1560a8c4a54236a091e06c",
                "name": "e2"
            }
        ],
        "code": "101",
        "priority": "High",
        "customer": {
            "_id": "5e1470b6df00c5418c1631a3",
            "name": "c2"
        },
        "department": {
            "_id": "5e148fd3f5f7e463dc1ac9a6",
            "name": "travel"
        },
        "message": "new is off",
        "__v": 0
    },
    {
        "isResolved": false,
        "createdAt": "2020-01-08T05:06:01.539Z",
        "_id": "5e1564620dbb78636cc53f60",
        "employees": [
            {
                "_id": "5e155a9b25294538cc8dd316",
                "name": "e1"
            },
            {
                "_id": "5e1560a8c4a54236a091e06c",
                "name": "e2"
            }
        ],
        "code": "101",
        "priority": "High",
        "customer": {
            "_id": "5e1470b6df00c5418c1631a3",
            "name": "c2"
        },
        "department": {
            "_id": "5e148fd3f5f7e463dc1ac9a6",
            "name": "travel"
        },
        "message": "new is off",
        "__v": 0
    },
    {
        "isResolved": false,
        "createdAt": "2020-01-08T06:30:08.562Z",
        "_id": "5e15ad33b4b8bc1e3c4fd3d9",
        "code": "101",
        "priority": "High",
        "customer": {
            "_id": "5e1470b6df00c5418c1631a3",
            "name": "c2"
        },
        "department": {
            "_id": "5e148fd3f5f7e463dc1ac9a6",
            "name": "travel"
        },
        "employees": [],
        "message": "new is off",
        "__v": 0
    },
    {
        "isResolved": false,
        "createdAt": "2020-01-08T10:35:32.481Z",
        "_id": "5e15b0767baa608cc809977c",
        "code": "101",
        "priority": "High",
        "customer": {
            "_id": "5e1470b6df00c5418c1631a3",
            "name": "c2"
        },
        "department": {
            "_id": "5e148fd3f5f7e463dc1ac9a6",
            "name": "travel"
        },
        "employees": [],
        "message": "new is off",
        "__v": 0
    }
]

const id = "5e155a9b25294538cc8dd316"

const result  = tickets.filter(tic => tic.employees.find(emp => emp._id == id))
 
console.log(result)

