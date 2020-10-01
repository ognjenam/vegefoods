import { ShortenProductDescriptionPipe } from './shorten-product-description.pipe';

describe('ShortenProductDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenProductDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
