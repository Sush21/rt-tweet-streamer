import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import tweets from '../TestsData';

import useTwitter from '../useTwitter';

test('useTwitter performs GET request', async () => {
  const mock = new MockAdapter(axios);

  const mockData = tweets;
  const url = 'http://mock';
  mock.onGet(url).reply(200, mockData);

  /* fire events that update state */
  act(async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTwitter('potus', ''));

    expect(result.current.tweets).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.tweets).toEqual(tweets);
    expect(result.current.isLoading).toBeFalsy();
  });

  act(async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTwitter('', ''));

    expect(result.current.tweets).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.tweets).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });
});
