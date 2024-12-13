
// import {Hono} from 'hono'
// import { cors } from 'hono/cors'
// const app = new Hono()


// app.get('/', async (c) => {
// 	return c.text("hello world")
//   });
  
//   app.post('/', async (c) => {
// 	try {
// 	  // Get the ingredients sent in the request
// 	  const { ingredients } = await c.req.json();
// 	  console.log(`Received ingredients: ${ingredients}`);
  
// 	  // Prepare messages for the AI model with the user ingredients
// 	  const messages = [
// 		{ role: "system", content: "You are a friendly assistant that helps generate recipes based on ingredients." },
// 		{
// 		  role: "user",
// 		  content: `Generate a recipe using the following ingredients: ${ingredients}`,
// 		},
// 	  ];
  
// 	  // Call the AI model (Cloudflare AI in this case)
// 	  const aiResponse = await c.env.AI.run("@cf/meta/llama-3-8b-instruct", { messages });
// 	  console.log(aiResponse)
// 	  // If the AI response is valid, return it
// 	  if (aiResponse && aiResponse.response) {
// 		return c.json({ recipe: aiResponse.response });
// 	  }
  
// 	  // If no recipe is generated, send an error message
// 	  return c.json({ error: "No recipe generated. Please try again." }, 500);
	  
// 	} catch (error) {
// 	  console.error('Error generating recipe:', error);
// 	  return c.json({ error: 'Error generating recipe. Please try again later.' }, 500);
// 	}
//   });

//   app.use('/',
// 	cors({
// 	  origin: ['https://1d6b30c6.recipefrontend.pages.dev/'],
// 	})
//   )
  
//   export default app;
  

  import { Hono } from 'hono';
  import { cors } from 'hono/cors';
  
  const app = new Hono();
  
  // CORS middleware
  app.use(
	'/',
	cors({
	  origin: 'https://recipefrontend.pages.dev', // Explicitly allow your frontend
	  allowMethods: ['POST', 'GET', 'OPTIONS'],           // Allow necessary methods
	  allowHeaders: ['Content-Type'],                    // Allow Content-Type header
	})
  );
  
  app.get('/', async (c) => {
	return c.text('Hello World');
  });
  
//   app.post('/', async (c) => {
// 	try {
// 	  const { ingredients } = await c.req.json();
// 	  console.log(`Received ingredients: ${ingredients}`);
  
// 	  const messages = [
// 		{ role: 'system', content: 'You are a professional assistant that generates step-by-step recipes based on provided ingredients. The output should include a clear recipe title followed by detailed, sequential instructions for preparing the dish.' },
// 		{
// 		  role: 'user',
// 		  content: `Generate a step-by-step recipe with big dish name title and step for preparing dish using the following ingredients: ${ingredients}`,
// 		},
// 	  ];
  

// 	  const aiResponse = await c.env.AI.run('@cf/meta/llama-3-8b-instruct', { messages });
// 	  console.log(aiResponse);
  
// 	  if (aiResponse && aiResponse.response) {
// 		return c.json({ recipe: aiResponse.response });
// 	  }
  
// 	  return c.json({ error: 'No recipe generated. Please try again.' }, 500);
// 	} catch (error) {
// 	  console.error('Error generating recipe:', error);
// 	  return c.json({ error: 'Error generating recipe. Please try again later.' }, 500);
// 	}
//   });
  
//   export default app;


app.post('/', async (c) => {
	try {
	  const { ingredients } = await c.req.json();
	  console.log(`Received ingredients: ${ingredients}`);
  
	  const messages = [
		{
		  role: 'system',
		  content: `You are a professional assistant that generates step-by-step recipes based on provided ingredients. 
					The recipe should be formatted in Markdown. Include a clear *recipe title* (in Markdown headers) followed 
					by detailed, sequential instructions in less than 1000 words (using Markdown bullet points or numbered lists) and with limited spaces not too may whitespaces.`,
		},
		{
		  role: 'user',
		  content: `Generate a step-by-step recipe in Markdown format using the following ingredients in less than 1000 word with limited spaces not too may whitespaces: ${ingredients}`,
		},
	  ];
  
	  const aiResponse = await c.env.AI.run('@cf/meta/llama-3-8b-instruct', { messages });
	  console.log(aiResponse);
  
	  if (aiResponse && aiResponse.response) {
		return c.json({ recipe: aiResponse.response });
	  }
  
	  return c.json({ error: 'No recipe generated. Please try again.' }, 500);
	} catch (error) {
	  console.error('Error generating recipe:', error);
	  return c.json({ error: 'Error generating recipe. Please try again later.' }, 500);
    }
  });

  export default app;
  