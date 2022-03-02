import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { OptionsType } from '@t/store';

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
          <li key={index} class="tui-select-box-item" tab-index="-1" data-value={option.value}>
            {option.text}
          </li>
        ))}
      </ul>
    );
  }
}

export const Dropdown = connect<StoreProps>(({ open, options }) => ({ open, options }))(
  DropdownComp
);
