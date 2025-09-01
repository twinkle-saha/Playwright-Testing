import {test} from '../../fixtures/hooks-fixture'
//import { request } from 'playwright/test';
test('Api testing',async({request})=>{
    const bookingIds= await request.get("/booking");
    console.log(await bookingIds.json())
})
test('Get details by id', async({request})=>{
    const booking_details = await request.get('/booking/1')
    console.log(await booking_details.json());
})