import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { ComponentId } from '@t/store';

interface StoreProps {}

type Props = StoreProps & DispatchProps;

export class HiddenSelectComp extends Component<Props> {
  private el?: HTMLElement;

  render() {
    return (
      <select class="tui-select-box-hidden" tabIndex={-1}>
        <option label="Please select an option." value=""></option>
        <optgroup>
          Fruits
          <option value="apple" label="Apple"></option>
          <option value="banana" label="Banana"></option>
        </optgroup>
        <option value="none" label="The quick brown fox jumps over the lazy dog."></option>
        <optgroup>
          Colors<option value="red" label="Red"></option>
          <option value="yellow" label="Yellow"></option>
          <option value="green" label="Green" disabled={true}></option>
          <option value="blue" label="Blue" disabled={true}></option>
          <option value="purple" label="Purple"></option>
        </optgroup>
      </select>
    );
  }
}

export const HiddenSelect = connect<StoreProps>(({}) => ({}))(HiddenSelectComp);
