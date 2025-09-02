import { expect, request } from 'playwright/test';
import { test } from '../../fixtures/hooks-fixture'
import apiPathData from '../../data/api-data/api-path-data.json'
import restfulBrookerApiData from '../../data/api-data/restful-brooker-api-module-data.json'
import { only } from 'node:test';

//import { request } from 'playwright/test';

test('[GET]Verify the user is able to fetch all the booking ids using Get API and get valid response',
    {
        tag: ['@API', '@UAT'],
        annotation: {
            type: "Test case link",
            description: ""
        }
    },
    async ({ request }) => {
        const booking_id = await request.get(apiPathData.booking_path);
        const bookingIdJsonResp = await booking_id.json();
        console.log(bookingIdJsonResp);
        expect(booking_id.status()).toBe(200);
        expect(booking_id.statusText()).toBe('OK');
        expect(booking_id.headers()['content-type']).toBe(restfulBrookerApiData.content_type)
        expect(bookingIdJsonResp).not.toBeNull();
    })

test('[GET by Id]Verify the user is able to fetch the booking details by Id using Get API and get valid response', {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test case Link",
        description: " "
    }
}, async ({ request }) => {
    const booking_details = await request.get(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id}`)
    const bookingDetailsJsonResp = await booking_details.json();
    console.log(bookingDetailsJsonResp);
    expect(booking_details.status()).toBe(200);
    expect(booking_details.statusText()).toBe("OK");
    expect(booking_details.headers()['content-type']).toBe(restfulBrookerApiData.content_type);
    expect(bookingDetailsJsonResp).not.toBeNull();
    expect(bookingDetailsJsonResp.firstname).toEqual(restfulBrookerApiData.firstname);
})


test('[POST]Verify the user is able to create new booking by POST calla and validate response',
    {
        tag: ['@API', '@POST', '@UAT'],
        annotation: {
            type: 'Test case Link',
            description: " "
        }
    }, async ({ request }) => {

        const createBooking = await request.post(apiPathData.booking_path, {

            data: restfulBrookerApiData.create_booking
        });
        const createBookingJsonResp = await createBooking.json();
        expect(createBooking.status()).toBe(200);
        expect(createBooking.statusText()).toBe("OK");
        expect(createBookingJsonResp.booking).toMatchObject(restfulBrookerApiData.create_booking);
    }
)


test('[PUT]Verify the user is able to update booking details by ID and validate response',
    {
        tag: ['@API', '@PUT', '@UAT'],
        annotation: {
            type: 'Test case Link',
            description: " "
        }
    }, async ({ request, commonApiUtil }) => {
        const token = await commonApiUtil.createToken();
        const updateBooking = await request.put(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id_update}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data: restfulBrookerApiData.update_booking
        });
        const updateBookingJsonResp = await updateBooking.json();
        expect(updateBooking.status()).toBe(200);
        expect(updateBooking.statusText()).toBe("OK");
        expect(updateBookingJsonResp).toMatchObject(restfulBrookerApiData.update_booking);
    }
)

test('[PATCH]Verify the user is able to update partial booking details by ID and validate response',
    {
        tag: ['@UAT', '@PATCH', '@API'],
        annotation: {
            type: 'Test Case Link',
            description: " "
        }
    }, async ({ request, commonApiUtil }) => {

        const token = await commonApiUtil.createToken();
        const updatePartialBooking = await request.patch(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id_update}`, {
            headers: {
                Cookie: `token=${token}`
            },
            data: restfulBrookerApiData.update_partial_booking
        });
        const updatePartialBookingJsonResp = await updatePartialBooking.json();
        expect(updatePartialBooking.status()).toBe(200);
        expect(updatePartialBooking.statusText()).toBe("OK");
        expect(updatePartialBookingJsonResp.firstname).toMatch(restfulBrookerApiData.update_partial_booking.firstname)
        expect(updatePartialBookingJsonResp.lastname).toMatch(restfulBrookerApiData.update_partial_booking.lastname)

    })

test('[DELETE]Verify the user is able to delete the booking detail by id', {
    tag: ['@UAT', '@DELETE', '@API'],
    annotation: {
        type: 'Test case Link',
        description: " "
    }
},
    async ({request, commonApiUtil }) => {
        const token = await commonApiUtil.createToken();
        const deleteBooking = await request.delete(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id_to_delete}`, {
            headers: {
                Cookie: `token=${token}`
            },
        
        });
        expect(deleteBooking.status()).toBe(201);
        expect(deleteBooking.statusText()).toBe("Created");

        const getDeletedBooking = await request.get(`${apiPathData.booking_path}/${restfulBrookerApiData.booking_id_to_delete}`)
        expect(getDeletedBooking.status()).toBe(404);
        expect(getDeletedBooking.statusText()).toBe('Not Found');
    }
)