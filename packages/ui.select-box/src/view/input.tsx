import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { ComponentId } from '@t/store';

interface StoreProps {}

type Props = StoreProps & DispatchProps;

export class InputComp extends Component<Props> {
  private el?: HTMLElement;

  render() {
    return (
      <div class="tui-select-box-input" tabIndex={0}>
        <p class="tui-select-box-placeholder">Please select an option.</p>
        <span class="tui-select-box-icon">select</span>
      </div>
    );
  }
}

export const Input = connect<StoreProps>(({}) => ({}))(InputComp);
