import request from "supertest";
import { expect } from 'chai';
import app from "../src/setup/app";

describe("Books API", ()=>{
    before(()=>{
        console.log("Starting tests...");
    });

    it("should get all books", async ()=>{
        const res = await request(app).get("/books");
        expect(res.status).to.equal(200);
    });

    it("should add a book", async ()=>{
        const res = await request(app)
        .post("/books").send({title: "Book 1", description: "Description of Book 1"});
        expect(res.status).to.equal(201);
        expect(res.body.data.title).to.equal("Book 1");
        expect(res.body.data.description).to.equal("Description of Book 1");
    });
});