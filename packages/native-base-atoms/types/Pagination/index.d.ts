interface IndicatorProps {
  isActive: boolean;
}

declare const Indicator = React.FC<IndicatorProps>;

interface PaginationProps {
  numberOfItems: number;
  activeIndex: number;
  onIndicatorChange: (activeIdx: number) => void;
}

declare const Pagination = React.FC<PaginationProps>;

export { IndicatorProps, PaginationProps };
export default Pagination;
