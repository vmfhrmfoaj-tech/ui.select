import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { ComponentId } from '@t/store';

interface StoreProps {
  open: boolean;
}

type Props = StoreProps & DispatchProps;

export class InputComp extends Component<Props> {
  private el?: HTMLElement;

  public componentDidMount() {}

  render({ open }: Props) {
    return (
      <div
        ref={(el) => {
          this.el = el;
        }}
        className={open ? 'tui-select-box-input tui-select-box-open' : 'tui-select-box-input'}
        tabIndex={0}
      >
        <p class="tui-select-box-placeholder">Please select an option.</p>
        <span class="tui-select-box-icon">select</span>
      </div>
    );
  }
}

export const Input = connect<StoreProps>(({ open }) => ({ open }))(InputComp);
