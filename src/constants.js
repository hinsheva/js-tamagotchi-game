export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.5;
export const SCENES = ['day', 'rain'];
export const DAY_LENGTH = 40;
export const NIGHT_LENGHT= 4;

export const getNextHungerTime = (clock) => Math.floor(Math.random() * 3 ) + 5 + clock;
export const getNextDieTime = (clock) => Math.floor(Math.random() * 2 ) + 4 + clock;
export const getNextPoopTime = (clock) => Math.floor(Math.random() * 3 ) + 4 + clock;
export const getNextWeatherChangeTime = (clock) => Math.floor(Math.random() * 3 ) + 6 + clock;
