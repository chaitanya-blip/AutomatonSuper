import supertest from "supertest";;
import chai from "chai";
import url from "../config";
import jsonschema from "../test_data/jsonschema/getuser.json";
import jsonschema1 from "../test_data/jsonschema/postuser2.json"
import jsonschema2 from "../test_data/jsonschema/putuser.json"
import {expect} from "chai";
import {it} from "mocha";
chai.use(require ("chai-json-schema"));
const request = supertest(url.baseurl);


describe('/api/users/2', () => {
    it('GET user detail in page 2' ,async() => {
        const response = await request.get(url.getUser)
        
        .expect(200)
        .expect((res) => {
            //console.log(res)
            expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
        
        })
    });

    });

    describe('/api/users', () => {
        it('Post create an user detail', async() => {
            const response = await request.post(url.postUser)
    
            .send ({
                
                    "name": "morpheus",
                    "job": "leader",
                
            })
            .expect(201)
            .expect((res) => {
                //console.log(res)
                expect(res.body).to.be.jsonSchema(jsonschema1.valid_schema)
            })
            
        });
    
    });


    describe('api/users/2', () => {
        it('Put update an user detail', async() => {
            const response = await request.put(url.putUser)
            .type('application/json')
    
            .send  ({
                
                    "name": "chaiz",
                    "job": "leader",
                
            })
            .expect(200)
            .expect((res) => {
                //console.log(res)
                expect(res.body).to.be.jsonSchema(jsonschema2.valid_schema)
            })
            
        });
    
    });