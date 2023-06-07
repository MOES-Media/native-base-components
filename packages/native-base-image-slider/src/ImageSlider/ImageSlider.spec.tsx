import { NativeBaseProvider, Text } from 'native-base';
import * as renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { isMobile } from '@moes-media/native-base-components-utils';
import ImageSlider from './index';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1538655776941-6dcf10909d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1547930275-405fd0fcc8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

const imagesWithCaptions = [
  {
    src: 'https://images.unsplash.com/photo-1538655776941-6dcf10909d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Image 1',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Image 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    caption: 'Image 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1547930275-405fd0fcc8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Image 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Image 5',
  },
];

const inset = {
  frame: {
    width: 320,
    height: 640,
    x: 0,
    y: 0,
  },
  insets: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
};

const testCases = [];

describe('ImageSlider: Mobile', () => {
  beforeAll(() => {
    // @ts-ignore
    isMobile.mockImplementation(() => true);
  });
  afterAll(() => jest.resetAllMocks());

  it('given a minimum amount of configuration, it should render correctly', () => {
    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ImageSlider data={images} />
      </NativeBaseProvider>
    );
    expect(
      renderer
        .create(
          <NativeBaseProvider initialWindowMetrics={inset}>
            <ImageSlider data={images} />
          </NativeBaseProvider>
        )
        .toJSON()
    ).toMatchSnapshot();
    expect(getByTestId('mock-slider-content-item')).toBeTruthy();
    expect(() => getByTestId('mock-pagination')).toThrow();
  });

  it('given a configuration withPagination enabled, it should render the pagination correctly', () => {
    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ImageSlider data={images} withPagination />
      </NativeBaseProvider>
    );

    expect(getByTestId('mock-slider-content-item')).toBeTruthy();
    expect(getByTestId('mock-pagination')).toBeTruthy();
    expect(
      renderer
        .create(
          <NativeBaseProvider initialWindowMetrics={inset}>
            <ImageSlider data={images} withPagination />
          </NativeBaseProvider>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
