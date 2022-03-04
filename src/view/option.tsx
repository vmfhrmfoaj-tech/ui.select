import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { Item } from '@t/store/data';
import { cls } from '../css/constants';

interface OwnProps {
  item: Item;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StoreProps {
  hoveredKey: string | null;
  selected: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class OptionComp extends Component<Props> {
  private handleClick = () => {
    const { dispatch, item } = this.props;
    dispatch('setValue', item.value);
  };

  render({ item, hoveredKey }: Props) {
    const classNames = [
      cls.ITEM,
      hoveredKey === item.value ? cls.HIGHLIGHT : '',
      item.selected ? cls.SELECTED : '',
    ];
    return (
      <li
        class={classNames.join(' ')}
        tab-index="-1"
        data-value={item.value}
        onClick={this.handleClick}
      >
        {item.text}
      </li>
    );
  }
}

// eslint-disable-next-line no-empty-pattern
export const Option = connect<StoreProps, OwnProps>(({ renderState }, { item }) => ({
  hoveredKey: renderState.hoveredKey,
  selected: item.selected,
}))(OptionComp);
