// Random Numbers

export const random = (min = 0, max = 1) => Math.random() * (max - min) + min;

export const randomInt = (min = 0, max = 1) => {

  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

// Random Colors ( HEX )

export const randomColorHEX = () => "#000000".replace(/0/g, () => (~~(Math.random()*16)).toString(16));

// Generates Unique ID string

export const uuidv4 = () => {
  
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
  
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)

  );

};

// Generates Random String

export const randomStr = (len = 10) => {

  const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
  
  return [...Array(len)].map(i=>chars[Math.random()*chars.length|0]).join``;
  
};

// Shuffles the items of an Array and returns a new Array

export const shuffle = arr => arr.sort(() => Math.random() - 0.5);
