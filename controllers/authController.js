'use strict';

const data = require('../data/events');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();
const { ENCRYPTION_KEY } = process.env;

const loginEmployee = async (req, res, next) => {
    try {
        const employee_code = req.body.username;
        const password = req.body.password;

        const login = await data.loginEmployee(employee_code);

        if (login.length === 0) {
            return res.status(400).send("Invalid Username or Password!");
        }

        const storedEmployeeId = login[0].EmployeeId;
        const storedFirstName = login[0].first_name;
        const storedLastName = login[0].last_name;
        const storedPhotograph = login[0].photograph;

        if (storedEmployeeId.toString() !== password.toString()) {
            return res.status(401).json({ message: 'Invalid Username or Password!' });
        }

        const token = jwt.sign({ userId: login[0].EmployeeId }, ENCRYPTION_KEY, { expiresIn: '2h' });
        return res.json({
            employee_code,
            EmployeeId: storedEmployeeId,
            first_name: storedFirstName,
            last_name: storedLastName,
            photograph: storedPhotograph,
            token
        });


        // const isPasswordValid = await verifyPassword(password, login[0].password);

        // if (!isPasswordValid) {
        //     return res.status(401).json({ message: 'Invalid username or password' });
        // }

        // const token = jwt.sign({ userId: login.id }, '123qwerty', { expiresIn: '1h' });
        // return res.json({ token });


        // const isPasswordValid = await verifyPassword(password, login[0].password, login[0].salt);

        // if (!isPasswordValid) {
        //     return res.status(401).json({ message: 'Invalid username or password' });
        // }

        // const token = jwt.sign({ userId: login.id }, '123qwerty', { expiresIn: '1h' });
        // return res.json({ token });

    } catch (error) {
        res.status(400).send(error.message);
    }
}

// const verifyPassword = async (enteredPassword, hashedPassword) => {
//     return await bcrypt.compare(enteredPassword, hashedPassword);
// };

// const verifyPassword = async (enteredPassword, hashedPassword, salt) => {
//     const hashedEnteredPassword = await bcrypt.hash(enteredPassword, salt);
//     return hashedEnteredPassword === hashedPassword;
// };

module.exports = {
    loginEmployee
}

