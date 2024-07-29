import {test} from '@playwright/test';


test.beforeAll(async()=>{
        console.log('Before All hook');
})

test.beforeEach(async()=>{
        console.log('Before Each hook');
    })


test('Test 1', async()=>{
    console.log('Test 1')
})

test('Test 2', async()=>{
    console.log('Test 2')

})

test('Test 3', async()=>{
    console.log('Test 3')
    
})

test.afterAll(async()=>{
    console.log('After All hook');
})

test.afterEach(async()=>{
    console.log('After Each hook');
})
