const requestLocal = require("supertest")("http://localhost:3000");

const chai = require("chai");
const chaiJsonSchema = require("chai-json-schema-ajv");
const schemaDataTourists = require("./Utils/TypeAllTourist");
const schemaSingleDataTourist = require("./Utils/TypeSingleTourist");
const createPayload = require("./Payloads/createPayloads");
const updateAllPayload = require("./Payloads/updateAllPayload");
const oneUpdatePayload = require("./Payloads/oneUpdatePayload");

chai.use(chaiJsonSchema);
const expect = chai.expect;

//* start fake local json in cmd "json-server --watch db.json "
//* make sure API condition default

//!  Postive Api Testing Daftar Tourist

let res; //global
describe("FT_01_POS", () => {
  describe("POS_01 Percobaan mendapatkan semua data tourist", async () => {
    it("validasi tipe json benar", async () => {
      res = await requestLocal.get("/data");
      // console.log("res ss ", res);
      expect(res.body).jsonSchema(schemaDataTourists); //* verify type json
    });
    it("validasi status 200 request sukses", async () => {
      // const res = await requestLocal.get("/data");
      expect(res.status).equal(200); //* verify status code
    });
    it("validasi content content-type json", async () => {
      // const res = await requestLocal.get("/data");
      expect(res.headers["content-type"]).include("application/json"); // verify content type
    });
  });

  describe("POS_02 Percobaan membuat data tourist", async () => {
    it("validasi type json benar", async () => {
      res = await requestLocal.post("/data").send(createPayload);
      expect(res.body).to.be.jsonSchema(schemaSingleDataTourist); //* verify type json
    });
    it("validasi data yang dikirim sama seperti di body", async () => {
      expect(res.body["tourist_email"]).equal(createPayload.tourist_email); //* verify data same like in the body
      expect(res.body["tourist_location"]).equal(
        createPayload.tourist_location
      ); //* verify data same like in the body
      expect(res.body["tourist_name"]).equal(createPayload.tourist_name); //* verify data same like in the body
    });
    it("validasi status 201 data created", async () => {
      expect(res.status).equal(201); //* verify status 201 data was created
    });
  });

  describe("POS_03 percobaan memilih satu data tourist", () => {
    it("validasi status 200 data request sukses ", async () => {
      res = await requestLocal.get("/data/273786");
      expect(res.status).equal(200);
    });
    it("validasi tipe json benar", async () => {
      expect(res.body).jsonSchema(schemaSingleDataTourist);
    });
    it("validasi content content-type json", async () => {
      expect(res.headers["content-type"]).include("application/json"); // verify content type
    });
  });

  describe("POS_04 percobaan update semua data tourist ke database ", () => {
    it("validasi tipe json payload di database sama", async () => {
      res = await requestLocal.put("/data/273786").send(updateAllPayload);
      expect(res.body).jsonSchema(schemaSingleDataTourist);
    });
    it("validasi status 200 data request sukses", async () => {
      expect(res.status).equal(200);
    });
    it("input payload sama seperti di database", async () => {
      expect(res.body["tourist_email"]).equal(updateAllPayload.tourist_email);
      expect(res.body["tourist_location"]).equal(
        updateAllPayload.tourist_location
      );
      expect(res.body["tourist_name"]).equal(updateAllPayload.tourist_name);
    });
    it("validasi content content-type json", async () => {
      expect(res.headers["content-type"]).include("application/json"); // verify content type
    });
  });

  describe("POS_05 percobaan update satu data(tourist_location)", () => {
    it("validasi tipe json payload di database sama", async () => {
      const res = await requestLocal
        .patch("/data/273786")
        .send(oneUpdatePayload);
      expect(res.body).jsonSchema(schemaSingleDataTourist);
    });
    it("validasi status 200 data request sukses", async () => {
      expect(res.status).equal(200);
    });
    it("input payload sama seperti di database", async () => {
      expect(res.body["tourist_location"]).equal(
        oneUpdatePayload.tourist_location
      );
    });
  });

  describe("POS_06 percobaan delete data tourist ", () => {
    it("validasi status 200 data request sukses delete", async () => {
      res = await requestLocal.delete("/data/273786");
      expect(res.status).equal(200);
    });
    it("validasi data telah kosong ter-delete", async () => {
      expect(res.body).to.be.an("object");
    });
  });
});
