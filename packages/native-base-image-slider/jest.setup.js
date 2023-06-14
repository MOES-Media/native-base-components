import 'react-native/jest/setup';

jest.mock('@moes-media/native-base-components-atoms', () => ({
  Pagination: props => <mock-pagination data-testid="mock-pagination" {...props} />,
  SliderContentItem: props => (
    <div mock-slider-content-item data-testid="mock-slider-content-item" {...props} />
  ),
}));

jest.mock('@moes-media/native-base-components-utils', () => {
  const og = jest.requireActual('@moes-media/native-base-components-utils');
  return {
    og,
    isMobile: jest.fn(),
  };
});
