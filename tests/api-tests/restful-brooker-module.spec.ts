import { expect, request } from 'playwright/test';
import {test} from '../../fixtures/hooks-fixture'
import apiPathData from '../../data/api-data/api-path-data.json'
import restfulBrookerApiData from '../../data/api-data/restful-brooker-api-module-data.json'
import { only } from 'node:test';

//import { request } from 'playwright/test';

test('Verify the user is able to fetch all the booking ids using Get API and get valid response',
    {tag:['@API','@UAT'],
        annotation:{
            type:"Test case link",
            description:""
        }
    },
     async({request})=>{
    const booking_id = await request.get(apiPathData.booking_path);
    const bookingIdJsonResp = await booking_id.json();
    console.log(bookingIdJsonResp);
     expect(booking_id.status()).toBe(200);
     expect (booking_id.statusText()).toBe('OK');
     expect(booking_id.headers()['content-type']).toBe(restfulBrookerApiData.content_type)
     expect(bookingIdJsonResp).not.toBeNull();
})

test('Verify the user is able to fetch the booking details by Id using Get API and get valid response',{
    tag:['@API','@UAT'],
    annotation:{
        type:"Test case Link",
        description:" "
    }
},async({request})=>{
    const booking_details = await request.get(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id}`)
    const bookingDetailsJsonResp = await booking_details.json();
    console.log(bookingDetailsJsonResp);
    expect(booking_details.status()).toBe(200);
    expect (booking_details.statusText()).toBe("OK");
    expect(booking_details.headers()['content-type']).toBe(restfulBrookerApiData.content_type);
    expect(bookingDetailsJsonResp).not.toBeNull();
    expect(bookingDetailsJsonResp.firstname).toEqual(restfulBrookerApiData.firstname);
}) 


test('Verify the user is able to create new booking by POST calla and validate response',
    {
        tag:['@API','@POST','@UAT'],
        annotation:{
            type:'Test case Link',
            description:" "
        }
    }, async({request})=>{
        const createBooking = await request.post(apiPathData.booking_path,{
            data: restfulBrookerApiData.create_booking
        });
        const createBookingJsonResp = await createBooking.json();
        expect(createBooking.status()).toBe(200);
        expect(createBooking.statusText()).toBe("OK");
        expect(createBookingJsonResp.booking).toMatchObject(restfulBrookerApiData.create_booking);
    }
) 


test.only('Verify the user is able to update booking details by ID and validate response',
    {
        tag:['@API','@PUT','@UAT'],
        annotation:{
            type:'Test case Link',
            description:" "
        }
    }, async({request})=>{
        const updateBooking = await request.put(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id_update}`,{
            data: restfulBrookerApiData.update_booking
        });
        const updateBookingJsonResp = await updateBooking.json();
        expect(updateBooking.status()).toBe(200);
        expect(updateBooking.statusText()).toBe("OK");
        expect(updateBookingJsonResp).toMatchObject(restfulBrookerApiData.update_booking);
    }
)