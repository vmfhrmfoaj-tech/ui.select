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
  open: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class ContainerComp extends Component<Props> {
  private el?: HTMLElement;
  private inputEl?: typeof Input;

  public componentDidMount() {
    // console.log('ContainerComp componentDidMount el : ', this.inputEl);
    document.addEventListener('click', this.handleClick);
  }

  private handleClick = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const { open } = this.props;
    const isInputAreaClicked = this.isParentArea(target, '.tui-select-box-input');
    const isDopdownAreaClicked = this.isParentArea(target, '.tui-select-box-dropdown');

    if (isInputAreaClicked) {
      this.props.dispatch('setOpen', !open);
    } else if (!isInputAreaClicked && !isDopdownAreaClicked && open) {
      this.props.dispatch('setOpen', false);
    }
  };

  private isParentArea(target: HTMLElement, selector: string): boolean {
    return target.closest(selector) ? true : false;
  }

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

export const Container = connect<StoreProps, OwnProps>(({ id, open }) => ({ id: id, open }))(
  ContainerComp
);
