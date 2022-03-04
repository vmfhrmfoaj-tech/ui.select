import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { Data } from '@t/store/data';

interface StoreProps {
  data: Data;
}

type Props = StoreProps & DispatchProps;

export class HiddenSelectComp extends Component<Props> {
  render({ data }: Props) {
    return (
      <select class="tui-select-box-hidden" tabIndex={-1}>
        {data.items.map((item, index) => (
          <option key={index} label={item.text} value={item.value}></option>
        ))}
      </select>
    );
  }
}

export const HiddenSelect = connect<StoreProps>(({ data }) => ({ data }))(HiddenSelectComp);
