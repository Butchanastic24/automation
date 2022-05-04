const {Builder, Capabilities, By} = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {addMovie} = require('../functions/addMovie')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

// afterAll(async () => {
//     await driver.quit()
// });


test('Can delete movie once added to the list', async () => {
    await addMovie(driver);

});