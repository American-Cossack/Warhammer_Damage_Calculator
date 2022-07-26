const db = require('../db');
const Attack = require('../models/Attacker');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const atck = [
        {
            Name: 'Space Marine Bolter',
            Shots_Number: 2,
            BS: 3,
            S: 4,
            AP: 1,
            Damage: 1,
        },
    ];

    await Attack.insertMany(atck);
    console.log('Attacking foul heretics!');
};
const run = async () => {
    await main();
    db.close();
};

run();
