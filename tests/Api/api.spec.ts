import { test, expect } from "@playwright/test"

test.describe.parallel("Api testing", () => {
    const baseUrl = 'https://reqres.in/api'
    test("Check new user created", async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/1`)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.email).toBe("george.bluth@reqres.in")
        expect(responseBody.data.first_name).toBe("George")
        expect(responseBody.data.last_name).toBe("Bluth")
    })


    test("Create new user", async ({ request }) => {
        const response = await request.post(`${baseUrl}/users`, {
            data: {
                name: "Boaz",
                job: "Automation"
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.name).toBe('Boaz')
        expect(responseBody.job).toBe('Automation')
    })
}) 
