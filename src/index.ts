const worker = {
  fetch: async (req) => {
    return new Response("Hello, world!");
  }
} satisfies ExportedHandler;

export default worker;