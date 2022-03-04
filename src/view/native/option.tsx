import { h, Component } from 'preact';
import { connect } from '../hoc';
import { DispatchProps } from '../../dispatch';
import { ItemData } from '@t/store/data';

interface OwnProps {
  item: ItemData;
}

interface StoreProps {
  selected: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class NativeOptionComp extends Component<Props> {
  render({ item, selected }: Props) {
    return (
      <option tab-index="-1" data-value={item.value} selected={selected}>
        {item.label}
      </option>
    );
  }
}

// eslint-disable-next-line no-empty-pattern
export const NativeOption = connect<StoreProps, OwnProps>(({}, { item }) => ({
  selected: item.selected,
}))(NativeOptionComp);
