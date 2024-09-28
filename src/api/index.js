const generateResponse = () => {
  const totalCount = 5 + Math.floor(Math.random() * 5);

  let response = [];
  for (let index = 0; index < totalCount; index++) {
    response[index] = {
      x: new Date(`2024-09-${index}`),
      y: 80 + Math.random() * 10,
    };
  }
  return response;
};

export function mockFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(generateResponse()),
        status: 200,
        ok: true,
      });
    }, 500);
  });
}
