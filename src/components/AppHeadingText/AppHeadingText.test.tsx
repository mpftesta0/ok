import { render, screen } from '@test-utils';
import { AppHeadingText } from './AppHeadingText';

describe('AppHeadingText component', () => {
  it('has correct Vite guide link', () => {
    render(<AppHeadingText />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
