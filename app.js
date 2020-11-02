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
let r1 = {};
    r1.__proto__ = room;
    r1.nmbr = 421;
    r1.ppl = 2;

let r2 = {};
    r2.__proto__ = room;
    r2.nmbr = 517;
    r2.ppl = 3;



//Subjects
let sub1 = {};
    sub1.__proto__ = subject;
    sub1.subjName = 'Topology'
    sub1.subjProf = 'Oleh Hutik'

let sub2 = {};
    sub2.__proto__ = subject;
    sub2.subjName = 'Astronomy'
    sub2.subjProf = 'Valentin Lavrik'



//Books
let b1 = {}
    b1.__proto__ = book;
    b1.num = 188501,
    b1.title = 'Kobzar',
    b1.author = 'Taras Shevchenko',
    b1.genre = 'Poetry',
    b1.price = 99

    let b2 = {}
    b2.__proto__ = book;
    b2.num = 103601,
    b2.title = 'The Complex Numbers Study',
    b2.author = 'Chyzhykov',
    b2.genre = 'Math',
    b2.price = 50

    let b3 = {}
    b3.__proto__ = book;
    b3.num = 84101,
    b3.title = 'The Avengers',
    b3.author = 'Sten Lee',
    b3.genre = 'Comics',
    b3.price = 25

//Marks
let st1_sub2_markReport = {};
    st1_sub2_markReport.__proto__ = markReport
    st1_sub2_markReport.subj = sub2
    st1_sub2_markReport.points = 35
    st1_sub2_markReport.mark = 75

let st1_sub_markReport = {};
    st1_sub_markReport.__proto__ = markReport
    st1_sub_markReport.subj = subject
    st1_sub_markReport.points = 28
    st1_sub_markReport.mark = 71

let st3_sub2_markReport = {}
    st3_sub2_markReport.__proto__ = markReport
    st3_sub2_markReport.subj = sub2
    st3_sub2_markReport.points = 17
    st3_sub2_markReport.mark = 51

let st3_sub_markReport = {}
    st3_sub_markReport.__proto__ = markReport
    st3_sub_markReport.subj = subject
    st3_sub_markReport.points = 35
    st3_sub_markReport.mark = 66

let st2_sub_markReport = {}
    st2_sub_markReport.__proto__ = markReport
    st2_sub_markReport.subj = subject
    st2_sub_markReport.points = 30
    st2_sub_markReport.mark = 63

let st2_sub1_markReport = {}
    st2_sub1_markReport.__proto__ = markReport
    st2_sub1_markReport.subj = sub1
    st2_sub1_markReport.points = 35
    st2_sub1_markReport.mark = 55

let st4_sub_markReport = {}
    st4_sub_markReport.__proto__ = markReport
    st4_sub_markReport.subj = subject
    st4_sub_markReport.points = 28
    st4_sub_markReport.mark = 68

let st4_sub1_markReport = {}
    st4_sub1_markReport.__proto__ = markReport
    st4_sub1_markReport.subj = sub1
    st4_sub1_markReport.points = 29
    st4_sub1_markReport.mark = 58

let st5_sub_markReport = {}
    st5_sub_markReport.__proto__ = markReport
    st5_sub_markReport.subj = subject
    st5_sub_markReport.points = 45
    st5_sub_markReport.mark = 92

let st5_sub1_markReport = {}
    st5_sub1_markReport.__proto__ = markReport
    st5_sub1_markReport.subj = sub1
    st5_sub1_markReport.points = 47
    st5_sub1_markReport.mark = 97


//Students
let st1 = {};
    st1.__proto__= student;
    st1.sname = 'Pomirko'
    st1.name = 'Pavlo'
    st1.fname = 'Andriiovych'
    st1.id = 0002
    st1.byear = 1996
    st1.bcity = 'Lapaivka'
    st1.address = '37 Karmeliuka Str, Lapaivka'
    st1.sex = 'male'
    st1.family = 'married'
    st1.scship = 'yes'
    st1.room = r1.nmbr
    st1.books = []
    st1.books.push(b3)
    st1.marks = []
    st1.marks.push(st1_sub2_markReport, st1_sub_markReport)
    st1.rate = average(st1_sub2_markReport.mark, st1_sub_markReport.mark)


let st2 = {};
    st2.__proto__= student;
    st2.sname = 'Pidhorna'
    st2.name = 'Iryna'
    st2.fname = 'Romanivna'
    st2.id = 0302
    st2.byear = 1998
    st2.bcity = 'Dubliany'
    st2.address = '20 Halytska Str'
    st2.sex = 'female'
    st2.family = 'single'
    st2.scship = 'no'
    st2.room = r2.nmbr
    st2.marks = []
    st2.marks.push(st2_sub1_markReport, st2_sub_markReport)
    st2.rate = average(st2_sub1_markReport.mark, st2_sub_markReport.mark)


let st3 = {};
    st3.__proto__= student;
    st3.sname = 'Shestak'
    st3.name = 'Anastasiia'
    st3.fname = 'Ievhenivna'
    st3.id = 0077
    st3.byear = 1995
    st3.bcity = 'Kharkiv'
    st3.address = '162 Horodotska Str'
    st3.sex = 'female'
    st3.family = 'single'
    st3.scship = 'no'
    st3.room = r2.nmbr
    st3.marks = []
    st3.marks.push(st3_sub2_markReport, st3_sub_markReport)
    st3.rate = average(st3_sub2_markReport.mark, st3_sub_markReport.mark)


let st4 = {};
    st4.__proto__= student;
    st4.sname = 'Chornyi'
    st4.name = 'Ihor'
    st4.fname = 'Andriiovych'
    st4.id = 0022
    st4.byear = 1996
    st4.bcity = 'Lviv'
    st4.address = '107 Stryiska Str'
    st4.sex = 'male'
    st4.family = 'married'
    st4.scship = 'no'
    st4.room = r1.nmbr
    st4.marks = []
    st4.marks.push(st4_sub1_markReport, st4_sub_markReport)
    st4.rate = average(st4_sub1_markReport.mark, st4_sub_markReport.mark)

let st5 = {};
    st5.__proto__= student;
    st5.sname = 'Lys'
    st5.name = 'Mariia'
    st5.fname = 'Volodymyrivns'
    st5.id = 0756
    st5.byear = 1995
    st5.bcity = 'Sambir'
    st5.address = '51 Lypynskoho Str'
    st5.sex = 'female'
    st5.family = 'married'
    st5.scship = 'yes'
    st5.room = r2.nmbr
    st5.books = []
    st5.books.push(b1, b2)
    st5.marks = []
    st5.marks.push(st5_sub1_markReport, st5_sub_markReport)
    st5.rate = average(st5_sub1_markReport.mark, st5_sub_markReport.mark)

//Groups
let gr1 = {}
    gr1.__proto__ = group;
    gr1.groupNum = 122
    gr1.groupHead = student;
    gr1.groupMembers = []
    gr1.groupMembers.push(student, st1, st3)

let gr2 = {}
    gr2.__proto__ = group;
    gr2.groupNum = 132
    gr2.groupHead = st5;
    gr2.groupMembers = []
    gr2.groupMembers.push(st2, st4, st5)




//Functions

function printStudent(group) {
    let studentList = "";
    studentList += "\nStudents from group #" + group.groupNum + "\n" 
    + "The Head of group: " + group.groupHead.sname + " " + group.groupHead.name + "\n";
    for (let j = 0; j < group.groupMembers.length; j++) {
        studentList += +(j + 1) + " Student" + ": " + group.groupMembers[j].sname + " " + group.groupMembers[j].name + "\n";
    }
    studentList += "\n";

    return(studentList);
}


function marksXtoY(group, x, y) {

    let studentList = "";

    studentList += "\nStudents with rating from " + x;
    studentList += " to " + y + "\n";
    
    for (let i = 0; i < group.groupMembers.length; i++) {
        
            if (group.groupMembers[i].rate > x && group.groupMembers[i].rate < y) {
                studentList += "Student " + ": " + group.groupMembers[i].sname + " " 
                + group.groupMembers[i].name+ " " + group.groupMembers[i].rate;
                studentList +="\n"
            }
        
    }

    return(studentList);
}


function rateReport(student) {

    let rep = '';

    rep += student.sname + " " + student.name + " " + student.fname + "\n"
    +  "Scolarship status: " + student.scship + "\n"
     "Rating: " + student.rate;

    return rep;
}