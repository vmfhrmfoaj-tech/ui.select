import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { OptionsType } from '@t/store';

interface StoreProps {
  options: OptionsType;
}

type Props = StoreProps & DispatchProps;

export class HiddenSelectComp extends Component<Props> {
  render({ options }: Props) {
    return (
      <select class="tui-select-box-hidden" tabIndex={-1}>
        {options.map((item, index) => (
          <option key={index} label={item.text} value={item.value}></option>
        ))}
      </select>
    );
  }
}

export const HiddenSelect = connect<StoreProps>(({ options }) => ({ options }))(HiddenSelectComp);
