import { NumberWithSpacesPipe } from './number-with-spaces.pipe';

describe('NumberWithSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWithSpacesPipe();
    expect(pipe).toBeTruthy();
  });
});
