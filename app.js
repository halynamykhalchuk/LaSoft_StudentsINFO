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


//Hostel rooms
let r1 = Object.create(room);
    r1.nmbr = 421;
    r1.ppl = 2;

let r2 = Object.create(room);
    r2.nmbr = 517;
    r2.ppl = 3;



//Subjects
let sub1 = Object.create(subject);
    sub1.subjName = 'Topology'
    sub1.subjProf = 'Oleh Hutik'

let sub2 = Object.create(subject);
    sub2.subjName = 'Astronomy'
    sub2.subjProf = 'Valentin Lavrik'



//Books
let b1 = Object.create(subject)
    b1.num = 188501,
    b1.title = 'Kobzar',
    b1.author = 'Taras Shevchenko',
    b1.genre = 'Poetry',
    b1.price = 99

let b2 = Object.create(subject)
    b2.num = 103601,
    b2.title = 'The Complex Numbers Study',
    b2.author = 'Chyzhykov',
    b2.genre = 'Math',
    b2.price = 50

let b3 = Object.create(subject)
    b3.num = 84101,
    b3.title = 'The Avengers',
    b3.author = 'Sten Lee',
    b3.genre = 'Comics',
    b3.price = 25
