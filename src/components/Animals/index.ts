interface ILogger {
  log: (text: string) => void;
}

interface IStyles {
  setStyles: (color: string) => void;
}

export class ConsoleLogger implements ILogger {
  log = (text: string) => {
    console.log(text);
  };
}

export class FileLogger implements ILogger, IStyles {
  private color: string = "";

  log = (text: string) => {
    // вывод в файл c использованием this.color
  };
  setStyles = (color: string) => (this.color = color);
}

export class TGLogger implements ILogger {
  log = (text: string) => {
    // вывод в телегу
  };
}

export class Animal {
  constructor(private name: string) {}

  say = (what: string, where: ILogger) => {
    where.log(what);
  };
}

const bird = new Animal("Воробей");

const fileLogger = new FileLogger();
fileLogger.setStyles("#ff0000");

bird.say("Чирик", new ConsoleLogger());
bird.say("Чирик2", fileLogger);
bird.say("Чирик3", new TGLogger());
