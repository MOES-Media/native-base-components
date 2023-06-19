import React from 'react';
import { NativeBaseProvider } from 'native-base';
import * as renderer from 'react-test-renderer';
import { Button, Text, TextInput, View } from 'react-native';
import { render, screen, fireEvent, act } from '@testing-library/react-native';
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
    expect(screen.toJSON()).toMatchSnapshot();
    expect(getByTestId('native-base-components-slider-content-item')).toBeTruthy();
    expect(getByTestId('native-base-components-slider-content-item-image').props.source).toEqual({
      uri: images[0].src,
    });
    expect(() => getByTestId('native-base-components-pagination')).toThrow();
    expect(() => getByTestId('"native-base-componentes-typography-caption"')).toThrow();
  },
  withPagination: () => {
    const { getByTestId, getAllByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ImageSlider data={images} withPagination />
      </NativeBaseProvider>
    );

    expect(screen.toJSON()).toMatchSnapshot();
    expect(getByTestId('native-base-components-slider-content-item')).toBeTruthy();
    expect(getByTestId('native-base-components-pagination')).toBeTruthy();
    expect(getByTestId('native-base-components-slider-content-item-image').props.source).toEqual({
      uri: images[0].src,
    });
    expect(getAllByTestId('native-base-components-pagination-indicator').length).toEqual(
      images.length
    );
    expect(() => getByTestId('"native-base-componentes-typography-caption"')).toThrow();
  },
  withCaptions: () => {
    const { getByTestId, getAllByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <ImageSlider
          data={images.map((img, idx) => ({ ...img, caption: `Caption-${idx}` }))}
          withPagination
        />
      </NativeBaseProvider>
    );

    expect(screen.toJSON()).toMatchSnapshot();
    expect(getByTestId('native-base-components-slider-content-item')).toBeTruthy();
    expect(getByTestId('native-base-components-pagination')).toBeTruthy();
    expect(getByTestId('native-base-components-slider-content-item-image').props.source).toEqual({
      uri: images[0].src,
    });
    expect(getAllByTestId('native-base-components-pagination-indicator').length).toEqual(
      images.length
    );
    expect(() => getByTestId('"native-base-componentes-typography-caption"')).toBeTruthy();
    expect(() => getByTestId('"native-base-componentes-typography-caption"')).toHaveTextContent(
      'Caption-0'
    );
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

  describe('Web', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.useFakeTimers();
      process.env = {
        ...originalEnv,
        NODE_ENV: 'web',
      };
      jest.mock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'notMobile',
        select: () => null,
      }));
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
      render(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ImageSlider data={images} autoPlay />
        </NativeBaseProvider>
      );
      const initialRender = screen.toJSON();

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      const secondRender = screen.toJSON();

      expect(secondRender).not.toEqual(initialRender);
    });

    it('given a custom autoPlayInterval the component should update after set time', () => {
      render(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ImageSlider data={images} autoPlay autoPlayInterval={2000} />
        </NativeBaseProvider>
      );
      const initialRender = screen.toJSON();

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      const secondRender = screen.toJSON();

      expect(secondRender).not.toEqual(initialRender);
    });

    it('given the autoPlay prop it should loop back after the last timer has passed', () => {
      render(
        <NativeBaseProvider initialWindowMetrics={inset}>
          <ImageSlider data={images} autoPlay />
        </NativeBaseProvider>
      );
      const initialRender = screen.toJSON();

      act(() => {
        jest.advanceTimersByTime(9000);
      });

      const secondRender = screen.toJSON();

      expect(secondRender).toEqual(initialRender);
    });
  });
});
