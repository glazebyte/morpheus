const user = require('./users.json');
const patient = require('./patient.json');
const prisma = require('../src/app/api/db/index');

const main = async () => {
    console.log("Truncating all table...");

    await prisma.users.deleteMany();
    console.log("Truncated table users...");

    await prisma.patient.deleteMany();
    console.log("Truncated table users...");

    console.log("Truncated all tables.");

    console.log("Seeding all tables");

    await prisma.users.createMany({
        data: user
    })

    await prisma.patient.createMany({
        data: patient
    })

    console.log("Seeded all table!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })