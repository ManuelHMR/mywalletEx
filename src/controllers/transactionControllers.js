import { getTransactions, postTransaction } from "../repositories/transactionsRepositories.js";
import { sum } from "../services/sum.js";

export async function postFinancialEvents (req, res) {
    const { value, type } = req.body;
    const user = res.locals.user;
    postTransaction(user, value, type)
    res.sendStatus(201);
};

export async function getFinancialEvents(req, res) {
    const user = res.locals.user;
    const events = getTransactions(user);
    res.send(events.rows);
};

export async function getFinancialEventsSum (req, res) {
    const user = res.locals.user;
    const events = getTransactions(user);
    const sumR = sum(events);
    res.send(sumR);
};