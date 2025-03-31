import { readFile } from 'fs/promises';
import path from 'path';

export async function createReport() {
    const [employeeFileContent, transactionsFileContent] = await Promise.all([
        readFile(path.resolve(__dirname, '../dist/raw-data/employees.json'), 'utf-8'),
        readFile(path.resolve(__dirname, '../dist/raw-data/transactions.json'), 'utf-8'),
    ]);
    const employees = JSON.parse(employeeFileContent);
    const transactions = JSON.parse(transactionsFileContent);
    
    const stats = [];

    return stats;
}