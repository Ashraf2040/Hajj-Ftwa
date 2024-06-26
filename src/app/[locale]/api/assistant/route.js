
import { experimental_AssistantResponse } from 'ai';
import OpenAI from 'openai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';


// export async function POST(req: Request) {
  // Parse the request body
  export async function POST(req) {
      // Parse the request body
      const input= await req.json();

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: input.message,
  });

  return experimental_AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.createAndStream(threadId, {
        assistant_id:
          process.env.ASSISTANT_ID ??
          (() => {
            throw new Error('ASSISTANT_ID is not set');
          })(),
      });

      // forward run status would stream message deltas
      let runResult = await forwardStream(runStream);

      // status can be: queued, in_progress, requires_action, cancelling, cancelled, failed, completed, or expired
      while (
        runResult?.status === 'requires_action' &&
        runResult.required_action?.type === 'submit_tool_outputs'
      ) {
       
          
        runResult = await forwardStream(
          openai.beta.threads.runs.submitToolOutputsStream(
            threadId,
            runResult.id,
            runResult.required_action.data,
          ),
        );
      }
    },
  );
}








































































































































































// import { experimental_AssistantResponse } from "ai";
// import OpenAI from "openai";

// import { MessageContentText } from "openai/resources/beta/threads/messages/messages";
// import {OpenAIStream,StreamingTextResponse} from "ai"

// // Create an OpenAI API client (that's edge friendly!)
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY || "",
// });

// // IMPORTANT! Set the runtime to edge
// export const runtime = "edge";

// export async function POST(req) {
//   // Parse the request body
//   const input= await req.json();

//   // Create a thread if needed
//   const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

//   // Add a message to the thread
//   const createdMessage = await openai.beta.threads.messages.create(threadId, {
//     role: "user",
//     content: input.message

//   });

//   return experimental_AssistantResponse(
//     { threadId, messageId: createdMessage.id },
//     async ({ threadId, sendMessage }) => {
//       // Run the assistant on the thread
//       const run = await openai.beta.threads.runs.create(threadId, {
//         assistant_id:
//           process.env.ASSISTANT_ID ??
//           (() => {
//             throw new Error("ASSISTANT_ID is not set");
//           })(),
          
//       });
           
//       async function waitForRun(run) {
//         // Poll for status change
//         while (run.status === "queued" || run.status === "in_progress") {
//           // delay for 500ms:
//           await new Promise((resolve) => setTimeout(resolve, 500));

//           run = await openai.beta.threads.runs.retrieve(threadId, run.id);
//         }

//         // Check the run status
//         if (
//           run.status === "cancelled" ||
//           run.status === "cancelling" ||
//           run.status === "failed" ||
//           run.status === "expired"
//         ) {
//           throw new Error(run.status);
//         }
//       }

//       await waitForRun(run);

//       // Get new thread messages (after our message)
//       const responseMessages = (
//         await openai.beta.threads.messages.list(threadId, {
//           after: createdMessage.id,
//           order: "asc",
          
         
         
//         })
//       ).data;
        
   
//       // Send the messages
//       for (const message of responseMessages) {
    
//         sendMessage({
//           id: message.id,
          
//           role: "assistant",
          
//           content: message.content.filter(
//             (content) => content.type === "text") 
          
//         });
//         console.log(message)
//       }
//     }
//   );
// }