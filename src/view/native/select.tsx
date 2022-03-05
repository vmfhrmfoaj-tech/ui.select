import { h, Component } from 'preact';
import { connect } from '../hoc';
import { DispatchProps } from '../../dispatch';
import { Data } from '@t/store/data';
import { cls } from '../../css/constants';
import { NativeOption } from './option';

interface StoreProps {
  data: Data;
}

type Props = StoreProps & DispatchProps;

export class NativeSelectComp extends Component<Props> {
  render({ data }: Props) {
    return (
      <select class={cls.HIDDEN} tabIndex={-1}>
        {data.items.map((item, index) => (
          <NativeOption key={`native-option-${index}`} item={item}></NativeOption>
        ))}
      </select>
    );
  }
}

export const NativeSelect = connect<StoreProps>(({ data }) => ({ data }))(NativeSelectComp);
