import { NativeBaseProvider } from 'native-base';
import * as renderer from 'react-test-renderer';
import { act, render } from '@testing-library/react';
import * as utils from '@moes-media/native-base-components-utils';
import ImageSlider from '../src/ImageSlider/index';

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

const testCases = {
  minimum: () => {
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
  },
  withPagination: () => {
    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ImageSlider data={images} withPagination />
      </NativeBaseProvider>
    );

    expect(
      renderer
        .create(
          <NativeBaseProvider initialWindowMetrics={inset}>
            <ImageSlider data={images} withPagination />
          </NativeBaseProvider>
        )
        .toJSON()
    ).toMatchSnapshot();
  },
};

describe('ImageSlider', () => {
  const originalConsoleError = console.error;

  afterAll(() => {
    jest.resetAllMocks();
    console.error = originalConsoleError;
  });

  beforeAll(() => {
    console.error = jest.fn((...args) => {
      const errorMessage = args[0];
      if (!errorMessage.includes('Warning:')) {
        originalConsoleError(...args);
      }
    });
  });

  describe('Mobile', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.useFakeTimers();
      process.env = {
        ...originalEnv,
        NODE_ENV: 'mobile',
      };
      jest.mock('@moes-media/native-base-components-utils', () => {
        const originalUtils = jest.requireActual('@moes-media/native-base-components-utils');
        return {
          ...originalUtils,
          isMobile: jest.fn().mockReturnValue(true),
        };
      });
    });

    afterEach(() => {
      jest.clearAllTimers();
      process.env = originalEnv;
    });

    it('given a minimum amount of configuration, it should render correctly', testCases.minimum);

    it(
      'given a configuration withPagination enabled, it should render the pagination correctly',
      testCases.withPagination
    );
  });

  describe('Web', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.useFakeTimers();
      process.env = {
        ...originalEnv,
        NODE_ENV: 'web',
      };
      jest.mock('@moes-media/native-base-components-utils', () => {
        const originalUtils = jest.requireActual('@moes-media/native-base-components-utils');
        return {
          ...originalUtils,
          isMobile: jest.fn().mockReturnValue(false),
        };
      });
    });

    afterEach(() => {
      jest.clearAllTimers();
      process.env = originalEnv;
    });

    it('given a minimum amount of configuration, it should render correctly', testCases.minimum);

    it(
      'given a configuration withPagination enabled, it should render the pagination correctly',
      testCases.withPagination
    );
  });

  describe('AutoPlay', () => {
    const originalEnv = process.env;

    const images = [
      { src: 'image1.jpg', caption: 'Image-1' },
      { src: 'image2.jpg', caption: 'Image-2' },
      { src: 'image3.jpg', caption: 'Image-3' },
    ];

    beforeEach(() => {
      jest.useFakeTimers();
      process.env = {
        ...originalEnv,
        NODE_ENV: 'test',
      };
    });

    afterEach(() => {
      jest.clearAllTimers();
      process.env = originalEnv;
    });

    it('given the autoPlay prop it should autoplay the slider', () => {
      const tree = renderer.create(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ImageSlider data={images} autoPlay />
        </NativeBaseProvider>
      );
      const initialRender = tree.toJSON();

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      const secondRender = tree.toJSON();

      expect(secondRender).not.toEqual(initialRender);

      expect(initialRender).toMatchSnapshot();
      expect(secondRender).toMatchSnapshot();
    });

    it('given a custom autoPlayInterval the component should update after set time', () => {
      const tree = renderer.create(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ImageSlider data={images} autoPlay autoPlayInterval={2000} />
        </NativeBaseProvider>
      );
      const initialRender = tree.toJSON();

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      const secondRender = tree.toJSON();

      expect(secondRender).not.toEqual(initialRender);

      expect(initialRender).toMatchSnapshot();
      expect(secondRender).toMatchSnapshot();
    });

    it('given the autoPlay prop it should loop back after the last timer has passed', () => {
      const tree = renderer.create(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ImageSlider data={images} autoPlay />
        </NativeBaseProvider>
      );
      const initialRender = tree.toJSON();

      act(() => {
        jest.advanceTimersByTime(9000);
      });

      const secondRender = tree.toJSON();

      expect(secondRender).toEqual(initialRender);
    });
  });
});
