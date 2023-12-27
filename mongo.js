db.createCollection("Mentors1")

const Mentorslist = [
    {
        name : "sanjay",
        batch : "B43we",
        stack : "MERN"
    },
    {
        name : "Ajay",
        batch : "B43we",
        stack : "MERN"
    },
    {
        name : "suryaa",
        batch : "B43we",
        stack : "MEAN"
    },
    {
        name : "vipin",
        batch : "B43we",
        stack : "MEAN"
    },
    {
        name : "sabari",
        batch : "B43we",
        stack : "UI/UX"
    },
]

db.Mentors1.insertMany([
    {
        name: "sanjay",
        batch: "B43we",
        stack: "MERN"
    },
    {
        name: "Ajay",
        batch: "B43we",
        stack: "MERN"
    },
    {
        name: "suryaa",
        batch: "B43wd",
        stack: "MEAN"
    },
    {
        name: "vipin",
        batch: "B43wd",
        stack: "MEAN"
    },
    {
        name: "sabari",
        batch: "B43we",
        stack: "UI/UX"
    },
    {
        name: "Gopal",
        batch: "B43wd",
        stack: "DataScience"
    },
    {
        name: "Bipin",
        batch: "B44wd",
        stack: "DataScience"
    },
    {
        name: "sundar",
        batch: "B44we",
        stack: "DEVOPS"
    },
    {
        name: "swathy",
        batch: "B45wd",
        stack: "DEVOPS"
    },
    {
        name: "shreya",
        batch: "B45we",
        stack: "Blockchain"
    },
    {
        name: "pooja",
        batch: "B46wd",
        stack: "Python"
    },
]);
db.createCollection("Students1")

const studentlist = [
    {
    name : "siro",
    batch : "B43we",
    stack : "MERN",
    language: "Tamil"

},
{
    name : "joshua",
    batch : "B43we",
    stack : "MERN",
    language: "Tamil"

},
{
    name : "jonas",
    batch : "B43wd",
    stack : "Datascience",
    language: "Tamil"

},
{
    name : "sorna",
    batch : "B43wd",
    stack : "Datascience",
    language: "English"

},
{

    name : "kiruba",
    batch : "B44we",
    stack : "UI/UX",
    language: "Tamil"

},
{
    name : "hema",
    batch : "B44wd",
    stack : "UI/UX",
    language: "English"

},
{
    name : "Kishore",
    batch : "B45we",
    stack : "DEVOPS",
    language: "Tamil"

},
{
    name : "suresh",
    batch : "B45wd",
    stack : "DEVOPS",
    language: "English"

},
{
    name : "Anbu",
    batch : "B45we",
    stack : "DEVOPS",
    language: "Tamil"

},
{
    name : "jackob",
    batch : "B46wd",
    stack : "Python",
    language: "Tamil"

},
{
    name : "divya",
    batch : "B46wd",
    stack : "Python",
    language: "Tamil"

},
{
    name : "divya",
    batch : "B45we",
    stack : "Blockchain",
    language: "Tamil"

}

]

db.Students1.insertMany([
    {
    name : "siro",
    batch : "B43we",
    stack : "MERN",
    language: "Tamil"

},
{
    name : "joshua",
    batch : "B43we",
    stack : "MERN",
    language: "Tamil"

},
{
    name : "jonas",
    batch : "B43wd",
    stack : "Datascience",
    language: "Tamil"

},
{
    name : "sorna",
    batch : "B43wd",
    stack : "Datascience",
    language: "English"

},
{

    name : "kiruba",
    batch : "B44we",
    stack : "UI/UX",
    language: "Tamil"

},
{
    name : "hema",
    batch : "B44wd",
    stack : "UI/UX",
    language: "English"

},
{
    name : "Kishore",
    batch : "B45we",
    stack : "DEVOPS",
    language: "Tamil"

},
{
    name : "suresh",
    batch : "B45wd",
    stack : "DEVOPS",
    language: "English"

},
{
    name : "Anbu",
    batch : "B45we",
    stack : "DEVOPS",
    language: "Tamil"

},
{
    name : "jackob",
    batch : "B46wd",
    stack : "Python",
    language: "Tamil"

},
{
    name : "divya",
    batch : "B46wd",
    stack : "Python",
    language: "Tamil"

},
{
    name : "divya",
    batch : "B45we",
    stack : "Blockchain",
    language: "Tamil"

}

]
)