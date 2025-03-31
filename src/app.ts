import { createReport } from './script';
import { log } from './tools/logger';
import { runScript } from './tools/scriptRunner';

runScript(async () => {
    const report = await createReport();
    log(report);
});