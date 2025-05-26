import { createReadStream, createWriteStream } from "fs"; //importing writable and readable streams
import path from "path";  

const inputFilePath = path.join(import.meta.dirname, "input.txt");   
const outputFilePath = path.join(import.meta.dirname, "output.txt"); 

const readableStream = createReadStream (inputFilePath, { 
encoding: "utf-8", 
highWaterMark: 16, //sending 16 character in a buffer at once
}); 

const writableStream = createWriteStream (outputFilePath); 

// Listen for data chunks 
readableStream.on("data", (chunk) => { 
    console.log("Buffer (chunk):", Buffer.from(chunk)); // Convert the chunk to a buffer 
    console.log("Received chunk:", chunk); // Logs each 16-byte chunk 
    writableStream.write(chunk); // Write each chunk to output file 
}); 

// Handle stream end 
readableStream.on("end", () => { 
    console.log("File read completed."); 
    writableStream.end(); 
});

//readableStream.pipe (writableStream);   //for (sending) / (copy-paste) data

// Handle errors 
readableStream.on("error", (err) => console.error("Error:", err)); 
writableStream.on("error", (err) => console.error("Error:", err));