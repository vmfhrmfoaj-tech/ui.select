import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch';
import { ItemData } from '@t/store/data';
import { cls } from '../css/constants';

interface OwnProps {
  item: ItemData;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StoreProps {
  hoveredKey: string | null;
  selected: boolean;
  disabled: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class OptionComp extends Component<Props> {
  private handleClick = () => {
    const { dispatch, item } = this.props;
    dispatch('setValue', item.value);
  };

  render({ item, hoveredKey, selected, disabled }: Props) {
    console.log('layer option render');
    const classNames = [
      cls.ITEM,
      hoveredKey === item.value ? cls.HIGHLIGHT : '',
      selected ? cls.SELECTED : '',
      disabled ? cls.DISABLED : '',
    ];
    return (
      <li
        class={classNames.join(' ')}
        tab-index="-1"
        data-value={item.value}
        onClick={this.handleClick}
      >
        {item.label}
      </li>
    );
  }
}

// eslint-disable-next-line no-empty-pattern
export const Option = connect<StoreProps, OwnProps>(({ hoveredKey }, { item }) => ({
  hoveredKey,
  selected: item.selected,
  disabled: item.disabled,
}))(OptionComp);
