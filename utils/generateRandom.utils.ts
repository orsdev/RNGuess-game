export const generateRandom = (min: number, max: number, exclude: number) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandom(min, max, exclude);
    } else {
      return rndNum;
    }
}