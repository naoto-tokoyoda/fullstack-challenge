// src/test/api.test.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

test('User authentication API query', async () => {
  const mockData = {
    user: {
      id: 1,
      identifier: 'testuser',
      email: 'test@example.com',
    },
    jwt: 'fake_jwt_token',
  };

  mock.onPost('http://localhost:1337/api/auth/local/').reply(200, mockData);

  const response = await axios.post('http://localhost:1337/api/auth/local/', {
    identifier: 'testuser',
    password: 'testpassword',
  });

  expect(response.status).toBe(200);
  expect(response.data.user).toEqual(mockData.user);
  expect(response.data.jwt).toBe(mockData.jwt);
});

