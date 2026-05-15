import { test } from '../fixtures/testFixtures';

import { users } from '../test-data/users';

test('Login Successfully', async ({
  homePage,
  loginPage
}) => {

  await homePage.open();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await loginPage.verifyLoginSuccess(
    users.validUser.username
  );
});