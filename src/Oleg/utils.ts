export const toCamelCase = (str: string, separator: string) => {
  // const i = null
  return str
    .split("")
    .reduce((acc: string[], value, index) => {
      if (value === separator) {
        const i = index + 1;
        if (str[i] !== separator) {
          acc = [...acc, str[i].toUpperCase()];
        }
      } else {
        acc = [...acc, value];
      }
      return acc;
    }, [])
    .join("");
  // .findIndex((el) => {
  //   return el === separator;
  // });
  // .filter((element) => element !== separator)
  // .map((el) => el.toUpperCase());
};

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
