import { test, expect } from "@playwright/test";

test("Download", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download");

    const [downloadedFile] = await Promise.all([page.waitForEvent("download"),page.getByRole("button", { name: "Download" }).click()]);

    //await downloadedFile.saveAs("C:/Users/hi/Downloads/sampledownloaded.png"); // Saves using the name given by the user
    await downloadedFile.saveAs("C:/Users/hi/Downloads/"+ downloadedFile.suggestedFilename());
    console.log("Download completed");
    console.log("Download path:", await downloadedFile.path());
});

test("Upload", async ({ page }) => {
    await page.goto("https://www.ilovepdf.com/jpg_to_pdf");

await page.locator('input[type="file"]').setInputFiles("C:\\Users\\hi\\Downloads\\sampleFile.jpeg");

await page.waitForTimeout(3000);
});