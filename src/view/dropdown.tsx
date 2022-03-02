import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { OptionsType } from '@t/store';
import { Option } from './option';

interface StoreProps {
  open: boolean;
  options: OptionsType;
}

type Props = StoreProps & DispatchProps;

export class DropdownComp extends Component<Props> {
  render({ open, options }: Props) {
    return (
      <ul className={open ? 'tui-select-box-dropdown' : 'tui-select-box-hidden'}>
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </ul>
    );
  }
}

export const Dropdown = connect<StoreProps>(({ open, options }) => ({ open, options }))(
  DropdownComp
);
