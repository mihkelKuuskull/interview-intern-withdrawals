import chalk from 'chalk';

let isLoggingDisabled = false;
export function disableLogs() {
    isLoggingDisabled = true;
}

export function log(message?, type = LoggerType.INFO) {
    const colorByType = {
        [LoggerType.ERROR]: 'red',
        [LoggerType.INFO]: 'cyanBright',
    };
    const color = colorByType[type] || 'blue';
    if (!isLoggingDisabled) {
        console.log(chalk[color](parseMessage(message)));
    }
}

export enum LoggerType {
    ERROR = 'error',
    INFO = 'info',
}

function parseMessage(message: string) {
    if (typeof message === 'object') {
        try {
            return formatObject(message);
        } catch (error) {
            return 'logging error';
        }
    }

    return message || ''; 
}

function formatObject(obj: object): string {
    const json = JSON.stringify(obj, null, 2);
    return json
        .replace(/({)/g, chalk.yellow('$1'))
        .replace(/(})/g, chalk.yellow('$1'))
        .replace(/"(.*?)":/g, (match, p1) => chalk.magenta(`"${p1}":`))
}