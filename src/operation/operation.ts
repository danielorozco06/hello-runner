interface Body {
  name: string;
}

interface Response {
  statusCode: number;
  message: string;
}

export function sayHello(body: Body): Response {
  const msg = `Hello world, ${body.name}!`;
  console.log(msg);
  return { statusCode: 200, message: msg };
}
