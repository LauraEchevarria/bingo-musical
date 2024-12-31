export const generateIndexArray = (total_values) =>
  Array.from({ length: total_values }, (_, i) => i);

export const generateRandomIndexArray = (length, total_values) => {
  // Generate array with all index
  let indexArrayComplete = generateIndexArray(total_values);
  // Complete result array with random values
  let res = [];
  while (res.length < length) {
    let index = Math.ceil(Math.random() * indexArrayComplete.length) - 1;
    res.push(indexArrayComplete[index]);
    indexArrayComplete.splice(index, 1);
  }
  return res.sort((a, b) => a - b);
};

export const generateRandomArray = (final_lenght, array) => {
  if (final_lenght >= array.length) return array;
  let indexes = generateRandomIndexArray(final_lenght, array.length);
  return indexes.map((i) => array[i]);
};
