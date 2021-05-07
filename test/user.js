import supertest from "supertest";;
import chai from "chai";
import config from "../config";
import jsonschema from "../test_data/jsonschema/getuser.json";
import {expect} from "chai";
import {it} from "mocha";
chai.use(require ("chai-json-schema"));
const request = supertest(config.baseurl);


describe('/api/users/2', () => {
    it('GET user detail in page 2' ,async() => {
        const response = await request.get(config.getUser)
        
        .expect(200)
        .expect((res) => {
            //console.log(res)
            expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
        
        })
    });

    });

    