const consoleLog = (msg: string) => {
    const style = "color: white;" +
                    "background-color: #E6007E;" +
                    "font-size: 16px;" +
                    "padding: 10px;";
    console.log(`%c${msg}`, style);

}

export const app = () => {
    consoleLog('Hello World!')
}