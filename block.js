const block = (arr,req) => {
    let tracker = {}
    let best = 0
    // let counter = 0
    let illrate = 0
    while (illrate < arr.length){
        for (let i = 0; i < arr.length; i++) {
            const street = arr[i];
            for (let j = 0; j < req.length; j++) {
                const reqOne = req[j];
                if(street[reqOne]){
                    tracker[reqOne] = true
                    counter += Math.abs(illrate-i)
                }
            }
        }
        illrate ++
    }


    console.log(tracker)
    console.log(counter)

}

let Blocks = [
    {
        'gym':false,
        'school':true,
        'store':false,
    },
    {
        'gym':true,
        'school':false,
        'store':false,
    },
    {
        'gym':true,
        'school':true,
        'store':false,
    },
    {
        'gym':false,
        'school':true,
        'store':false,
    },
    {
        'gym':false,
        'school':true,
        'store':true,
    },
]

let reqs = ["gym","school",'store']

console.log(block(Blocks,reqs))