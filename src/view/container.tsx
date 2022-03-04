import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { ComponentId } from '@t/store';
import { Input } from './input';
import { Dropdown } from './dropdown';
import { HiddenSelect } from './hiddenselect';
import { RenderState } from '@t/store/renderState';
import { cls } from '../css/constants';

interface OwnProps {
  rootElement: HTMLElement;
}

interface StoreProps {
  id: ComponentId;
  renderState: RenderState;
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
    const { renderState, dispatch } = this.props;
    const isInputAreaClicked = this.isParentArea(target, `.${cls.INPUT}`);
    const isDopdownAreaClicked = this.isParentArea(target, `.${cls.DROPDOWN}`);

    if (isInputAreaClicked) {
      dispatch('setOpen', !renderState.isOpen);
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
        <HiddenSelect />
      </div>
    );
  }
}

export const Container = connect<StoreProps, OwnProps>(({ id, renderState }) => ({
  id,
  renderState,
}))(ContainerComp);
