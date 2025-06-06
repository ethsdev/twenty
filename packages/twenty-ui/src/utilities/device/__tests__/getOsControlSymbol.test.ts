import { getOsControlSymbol } from '../getOsControlSymbol';

describe('getOsControlSymbol', () => {
  let userAgentSpy: jest.SpyInstance;

  beforeEach(() => {
    userAgentSpy = jest.spyOn(window.navigator, 'userAgent', 'get');
  });

  afterEach(() => {
    userAgentSpy.mockRestore();
  });

  it('should return Ctrl for Windows', () => {
    userAgentSpy.mockReturnValue(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
    );
    expect(getOsControlSymbol()).toBe('Ctrl');
  });

  it('should return ⌘ for Mac', () => {
    userAgentSpy.mockReturnValue(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    );
    expect(getOsControlSymbol()).toBe('⌘');
  });
});
