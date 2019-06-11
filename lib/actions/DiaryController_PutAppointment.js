/**
 * Auto-generated action file for "LetMC Api V3, diary" API.
 *
 * Generated at: 2019-06-06T13:12:25.271Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / letmc-com-diary-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'DiaryController_PutAppointment'
 * Endpoint Path: '/v3/diary/{shortName}/appointment'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "shortName",
    "appointmentID",
    "lettings"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "shortName": "shortName",
    "appointmentID": "appointmentID",
    "lettings": "lettings",
    "End": "End",
    "StaffID": "StaffID",
    "StaffName": "StaffName",
    "Start": "Start",
    "AllocationDetails": "AllocationDetails",
    "AppointmentType": "AppointmentType",
    "ExtraComments": "ExtraComments",
    "Guests": "Guests",
    "Subject": "Subject",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['apiKey'] = cfg['auth_apiKey'];
    securities['basic'] = {username: cfg.auth_username, password: cfg.auth_password};;

    let callParams = {
        spec: spec,
        operationId: 'DiaryController_PutAppointment',
        pathName: '/v3/diary/{shortName}/appointment',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}