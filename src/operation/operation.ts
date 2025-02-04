interface Response {
  statusCode: number;
  message: string;
}

export function sayHello(name: string): Response {
  const msg = `Hello world, ${name}!`;
  console.log(msg);
  return { statusCode: 200, message: msg };
}
