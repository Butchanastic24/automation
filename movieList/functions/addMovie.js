const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    const addMovieInput = await driver.findElement(By.xpath('//input'))

    addMovieInput.sendKeys('Back to the future');

    const addMovieButton = await driver.findElement(By.xpath('//button'))

    addMovieButton.click();

    driver.sleep(1000);

    const movie = await driver.findElement(By.xpath('//li'));

    const isDisplayed = movie.isDisplayed()

    expect(isDisplayed).toBeTruthy();
}

module.exports = {
    addMovie
};