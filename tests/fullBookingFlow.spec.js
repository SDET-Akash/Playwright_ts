import { test, expect } from "@playwright/test";
import { link } from "node:fs";

test("login for booking flow", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // step 1 - Login
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByPlaceholder("you@email.com").fill("akbugtotest@gmail.com");
    await page.getByPlaceholder("••••••").fill("Akash@1051");
    await page.getByRole("button", { name: "Sign In" }).click();

    // step 2 - Assert: link with text Browse Events → is visible (confirms login success)
    await expect(page.locator(".flex a .inline-flex").first()).toBeVisible();

    await page.getByRole("button", { name: "Admin" }).click();
    await page.locator(".absolute a ").getByText("Manage Events").click();

    // step 3 - Create new Event
    // Generate a unique event title using Test Event ${Date.now()} — store this in a variable, you will need it throughout the test
    const eventTitle = `Test Event ${Date.now()}`;
    await page.locator("#event-title-input").fill(eventTitle);

    await page.getByPlaceholder("Describe the event…").fill("This is a test event created by Playwright automation.");
    await page.locator("#category").selectOption("Sports");

    await page.locator("#city").fill("Pune");
    await page.locator("#venue").fill("Pune Stadium");
    // await page.locator("#event-date-&-time").fill('2027-12-31T10:00');
    await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');

    await page.getByLabel("Price ($)").fill("100");
    await page.getByLabel('Total Seats').fill('50');

    await page.locator("#add-event-btn").click();
    await expect(page.getByText("Event created!")).toBeVisible();

    console.log(`Created event: "${eventTitle}"`);

    // go to the event page

    await page.goto('https://eventhub.rahulshettyacademy.com/events');

    const eventcards = page.getByTestId("event-card");
    await expect(eventcards.first()).toBeVisible();

    const targetcard = eventcards.filter({ hasText: eventTitle });
    await expect(targetcard).toBeVisible();

    const seatsBeforeBooking = parseInt(await targetcard.getByText('seat').first().innerText());
    console.log(`Seats before booking: ${seatsBeforeBooking}`);

    await targetcard.getByTestId("book-now-btn").click();


    // Fill the booking form

    // verify the ticket count

    const ticketcount = page.locator("#ticket-count");
    await expect(ticketcount).toHaveText("1");

    await page.locator("#customerName").fill("Akash Walzade");
    await page.locator("#customer-email").fill("akashaa@yopmail.com")

    await page.getByPlaceholder("+91 98765 43210").fill("9876543210");
    await page.locator('.confirm-booking-btn').click();

    // Verify the booking confirmation

    const bookingId = page.locator(".booking-ref");
    await expect(bookingId).toBeVisible();


    const bookingrefid = (await bookingId.innerText()).trim();
    console.log(`Booking Reference ID: ${bookingrefid}`);


    // view the booking and verify it

    await page.getByRole("link", {name: "View My Bookings"}).click();

    const bookingCards = page.getByTestId("booking-card");
    const targetBookingCard = bookingCards.filter({ hasText: bookingrefid });
    await expect(targetBookingCard).toBeVisible();
    










    await page.pause();
})