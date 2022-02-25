import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { ComponentId } from '@t/store';

interface StoreProps {}

type Props = StoreProps & DispatchProps;

export class DropdownComp extends Component<Props> {
  private el?: HTMLElement;

  render() {
    return (
      <ul class="tui-select-box-dropdown tui-select-box-open">
        <li data-group-index="0">
          <span class="tui-select-box-item-group-label">Fruits</span>
          <ul class="tui-select-box-item-group">
            <li class="tui-select-box-item" tabIndex={-1} data-value="apple" data-index="0">
              Apple
            </li>
            <li class="tui-select-box-item" tabIndex={-1} data-value="banana" data-index="1">
              Banana
            </li>
          </ul>
        </li>
        <li class="tui-select-box-item" tabIndex={-1} data-value="none" data-index="2">
          The quick brown fox jumps over the lazy dog.
        </li>
        <li data-group-index="1">
          <span class="tui-select-box-item-group-label">Colors</span>
          <ul class="tui-select-box-item-group">
            <li class="tui-select-box-item" tabIndex={-1} data-value="red" data-index="3">
              Red
            </li>
            <li class="tui-select-box-item" tabIndex={-1} data-value="yellow" data-index="4">
              Yellow
            </li>
            <li
              class="tui-select-box-item tui-select-box-disabled"
              tabIndex={-1}
              data-value="green"
              data-index="5"
            >
              Green
            </li>
            <li
              class="tui-select-box-item tui-select-box-disabled"
              tabIndex={-1}
              data-value="blue"
              data-index="6"
            >
              Blue
            </li>
            <li class="tui-select-box-item" tabIndex={-1} data-value="purple" data-index="7">
              Purple
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export const Dropdown = connect<StoreProps>(({}) => ({}))(DropdownComp);
