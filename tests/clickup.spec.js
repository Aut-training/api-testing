const expect = require('chai').expect;
const clickUpApi = require('../ClickUpApiV2/ClickUpApi');

describe.only('Clickup API', function () {

  this.timeout(10000);

  beforeEach(() => {

  });

  afterEach(() => {

  });

  it('Verifies the spaces in WorkSpace', async () => {
    const spaces = await clickUpApi.spaces.getSpaces(3012784);
    expect(spaces.spaces).to.have.lengthOf(1);
  });

  it('Verifies the space in WorkSpace', async () => {
    const space = await clickUpApi.spaces.getSpace(3022806);
    expect(space.name).to.eq('Luis Lopez\'s Space');
  });
});
