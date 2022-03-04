import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch';
import { Input } from './input';
import { Dropdown } from './dropdown';
import { NativeSelect } from './native/select';
import { cls } from '../css/constants';
import { ComponentId } from '@t/store';

interface OwnProps {
  rootElement: HTMLElement;
}

interface StoreProps {
  id: ComponentId;
  opened: boolean;
}

type Props = OwnProps & StoreProps & DispatchProps;

export class ContainerComp extends Component<Props> {
  private el?: HTMLDivElement | null;

  private inputEl?: typeof Input;

  public componentDidMount() {
    // console.log('ContainerComp componentDidMount el : ', this.inputEl);
    document.addEventListener('click', this.handleClick);
  }

  private handleClick = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const { opened, dispatch } = this.props;
    const isInputAreaClicked = this.isParentArea(target, `.${cls.INPUT}`);
    const isDopdownAreaClicked = this.isParentArea(target, `.${cls.DROPDOWN}`);

    if (isInputAreaClicked) {
      dispatch('setOpen', !opened);
    } else if (!isInputAreaClicked && !isDopdownAreaClicked && open) {
      dispatch('setOpen', false);
    }
  };

  private isParentArea(target: HTMLElement, selector: string): boolean {
    return !!target.closest(selector);
  }

  render() {
    return (
      <div
        class={cls.SELECT_BOX}
        ref={(el) => {
          this.el = el;
        }}
      >
        <Input />
        <Dropdown />
        <NativeSelect />
      </div>
    );
  }
}

export const Container = connect<StoreProps, OwnProps>(({ id, opened }) => ({
  id,
  opened,
}))(ContainerComp);
