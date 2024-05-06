const request = require("supertest");
const app = require("../src/app");
require("dotenv").config();

beforeEach(() => {
  console.log("Starting test...");
});

afterEach(() => {
  console.log("Finished test.");
});

describe("GET /", () => {
  it("should return a message", async () => { // Use async here
    const res = await request(app).get('/'); // Use await to wait for the response
    expect(res.statusCode).toBe(200); // Check the status code
    expect(res.text).toBe("Hello world"); // Check the response text
  });
});

