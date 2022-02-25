import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { ComponentId } from '@t/store';
import { Input } from './input';
import { Dropdown } from './dropdown';
import { HiddenSelect } from './hiddenselect';

interface OwnProps {
  rootElement: HTMLElement;
}

interface StoreProps {
  id: ComponentId;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class ContainerComp extends Component<Props> {
  private el?: HTMLElement;

  render() {
    return (
      <div
        class="tui-select-box"
        ref={(el) => {
          this.el = el;
        }}
      >
        <Input />
        <Dropdown />
        <HiddenSelect />
      </div>
    );
  }
}

export const Container = connect<StoreProps, OwnProps>(({ id }) => ({ id: id }))(ContainerComp);
