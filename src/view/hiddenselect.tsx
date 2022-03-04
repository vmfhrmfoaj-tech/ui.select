import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch';
import { Data } from '@t/store/data';
import { cls } from '../css/constants';

interface StoreProps {
  data: Data;
}

type Props = StoreProps & DispatchProps;

export class HiddenSelectComp extends Component<Props> {
  render({ data }: Props) {
    return (
      <select class={cls.HIDDEN} tabIndex={-1}>
        {data.items.map((item, index) => (
          <option key={index} label={item.label} value={item.value}></option>
        ))}
      </select>
    );
  }
}

export const HiddenSelect = connect<StoreProps>(({ data }) => ({ data }))(HiddenSelectComp);
