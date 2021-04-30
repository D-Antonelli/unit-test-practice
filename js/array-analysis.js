const analyze = array => {
    return {
      average: average(array),
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length,
    };
}

function average(array) {
    return array.reduce((acc, cur) => acc + cur) / array.length;
}

export default analyze;