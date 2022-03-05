import { h, Component } from 'preact';
import { connect } from '../hoc';
import { DispatchProps } from '../../dispatch';
import { ItemData } from '@t/store/data';

interface OwnProps {
  item: ItemData;
}

interface StoreProps {
  selected: boolean;
  disabled: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class NativeOptionComp extends Component<Props> {
  render({ item, selected, disabled }: Props) {
    console.log('native option render');
    return (
      <option
        tab-index="-1"
        data-index={item.index}
        data-value={item.value}
        selected={selected}
        disabled={disabled}
      >
        {item.label}
      </option>
    );
  }
}

// eslint-disable-next-line no-empty-pattern
export const NativeOption = connect<StoreProps, OwnProps>(({}, { item }) => ({
  selected: item.selected,
  disabled: item.disabled,
}))(NativeOptionComp);
