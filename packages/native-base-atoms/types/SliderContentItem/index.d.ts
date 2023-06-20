interface SliderContentItemProps {
  imageSource: string;
  caption?: string;
  width: number;
  active?: boolean;
}

declare const SliderContentItem = React.FC<SliderContentItemProps>;

export { SliderContentItemProps };
export default SliderContentItem;
