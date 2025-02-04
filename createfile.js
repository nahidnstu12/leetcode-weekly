const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Mapping problem topics to folder names
const TOPIC_MAP = {
  array: "arrays-hashing",
  sliding_window: "sliding-window",
  stack: "stacks",
  binary_search: "binary-search",
  linked_list: "linked-list",
  dynamic_programming: "dynamic-programming",
  tree: "trees",
  graph: "graphs",
};

// Function to format problem title into a filename
const formatFilename = (problemId, title) => {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
  return `${problemId}-${formattedTitle}.js`; 
};

// Function to create the file with a template
const createLeetCodeFile = (problemId, title, topic) => {
  if (!TOPIC_MAP[topic]) {
    console.log(`❌ Invalid topic! Choose from: ${Object.keys(TOPIC_MAP).join(", ")}`);
    return;
  }

  const folder = TOPIC_MAP[topic];
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true }); // Create folder if it doesn't exist
  }

  const filename = formatFilename(problemId, title);
  const filepath = path.join(folder, filename);

  if (fs.existsSync(filepath)) {
    console.log(`⚠️ File already exists: ${filename}`);
    return;
  }

  // Write a basic template to the file
  const content = `/**
 * LeetCode #${problemId} - ${title}
 * Category: ${topic.replace("_", " ").toUpperCase()}
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution() {
    
}

// Example Usage
console.log(solution()); 
`;

  fs.writeFileSync(filepath, content);
  console.log(`✅ File created: ${filepath}`);
};

// CLI to take input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter LeetCode Problem ID: ", (problemId) => {
  rl.question("Enter Problem Title: ", (title) => {
    rl.question("Enter Topic (array, sliding_window, stack, binary_search, linked_list, dynamic_programming, tree, graph): ", (topic) => {
      createLeetCodeFile(problemId, title, topic);
      rl.close();
    });
  });
});
