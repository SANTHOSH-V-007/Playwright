import {test} from '@playwright/test';

test("file handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5500/assertion.html");
    await page.pause();

    const filepath: string = "tests/git-cheat-sheet-education.pdf"
    await page.setInputFiles("input[type='file']", filepath);
    await page.locator("button[type='submit']").click();

    //test case for downloading file.
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a#downloadButton')
    ]);
    //code to save file on disk
    const downloadFilePath = await download.path();
    console.log("Downloading File Path:",downloadFilePath)
});