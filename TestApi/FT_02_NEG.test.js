const requestLocal = require("supertest")("http://localhost:3000");

const chai = require("chai");
const chaiJsonSchema = require("chai-json-schema-ajv");
const schemaSingleDataTourist = require("./Utils/TypeSingleTourist");
const createPayloadsSameName = require("./Payloads/createPayloadsSameName");
const createPayloadsNullName = require("./Payloads/createPayloadsNullName");
chai.use(chaiJsonSchema);
const expect = chai.expect;

// start fake local json in cmd "json-server --watch db.json "
//! Negative Api Testing Daftar Tourist

let res; //global
describe("FT_02_NEG", () => {
  describe("NEG_01 Percobaan membuat data tourist dengan nama yang sama", async () => {
    it("validasi type json benar", async () => {
      res = await requestLocal.post("/data").send(createPayloadsSameName);
      expect(res.body).to.be.jsonSchema(schemaSingleDataTourist);
    });
    it("validasi data yang dikirim sama seperti di body", async () => {
      expect(res.body["tourist_email"]).equal(
        createPayloadsSameName.tourist_email
      );
      expect(res.body["tourist_location"]).equal(
        createPayloadsSameName.tourist_location
      );
      expect(res.body["tourist_name"]).equal(
        createPayloadsSameName.tourist_name
      );
    });
    it("validasi status 201 data created", async () => {
      expect(res.status).equal(201); // must 400 depend
    });
  });

  describe("NEG_02 Percobaan membuat data tourist dengan nama Kosong", async () => {
    it("validasi type json benar", async () => {
      res = await requestLocal.post("/data").send(createPayloadsNullName);
      expect(res.body).to.be.jsonSchema(schemaSingleDataTourist);
    });
    it("validasi data yang dikirim sama seperti di body", async () => {
      expect(res.body["tourist_email"]).equal(
        createPayloadsNullName.tourist_email
      );
      expect(res.body["tourist_location"]).equal(
        createPayloadsNullName.tourist_location
      );
      expect(res.body["tourist_name"]).equal(
        createPayloadsNullName.tourist_name
      );
    });
    it("validasi status 201 data created", async () => {
      expect(res.status).equal(201); // must 400 depend
    });
    it("validasi data nama yang dikirim kosong", async () => {
      expect(res.body["tourist_name"]).to.be.empty;
    });
  });

  describe("NEG_03 percobaan delete data tourist tidak ada id", () => {
    it("validasi status 404 data request gagal", async () => {
      res = await requestLocal.delete("/data");
      expect(res.status).equal(404);
    });
  });

  describe("NEG_04 percobaan memilih satu data tourist id yang salah", () => {
    it("validasi status 404 data request gagal", async () => {
      res = await requestLocal.get("/data/273777");
      expect(res.status).equal(404);
    });
    it("validasi tipe json benar", async () => {
      expect(res.body).jsonSchema(schemaSingleDataTourist);
    });
    it("validasi content content-type json", async () => {
      expect(res.headers["content-type"]).include("application/json"); // verify content type
    });
  });
});
