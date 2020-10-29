//Templates
function average() {
    var sum = 0;

    for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];

    return sum == 0 ? sum : sum / arguments.length;
}
let subject = {
    subjName: 'Linear algebra',
    subjProf: 'Oleh Romaniv'
}

let markReport = {
    subj: subject,
    points: 50,
    mark: 100
}
let room = {
    nmbr: 720,
    ppl: 2
}

let book = {
    num: 100101,
    title: 'The China Study',
    author: 'Collin Kempbell',
    genre: 'Medcine',
    price: 20
}

let student = {
    sname: 'Mykhalchuk',
    name: 'Halyna',
    fname: 'Romanivna',
    id: 0001,
    byear: 1996,
    bcity: 'Mariupol',
    address: '39 Medovoi Pechery Str',
    sex: 'female',
    family: 'married',
    scship: 'yes',
    room: room.nmbr,
    marks: [markReport],
    rate: average(),
    books: []

}

let group = {
    groupNum: 141,
    groupHead: student,
    groupMembers: []
}
