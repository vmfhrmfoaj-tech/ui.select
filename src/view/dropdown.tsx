import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { OptionsType } from '@t/store';
import { Option } from './option';
import { RenderState } from '@t/store/renderState';

interface StoreProps {
  open: boolean;
  renderState: RenderState;
  options: OptionsType;
}

type Props = StoreProps & DispatchProps;

export class DropdownComp extends Component<Props> {
  private getHoveredKey(el: HTMLElement) {
    const liEl = el.closest('li');

    if (!liEl) {
      return null;
    }

    const hoveredKey = liEl.getAttribute('data-value');

    if (hoveredKey === null) {
      return null;
    }

    return hoveredKey;
  }

  private handleMouseover = (event: MouseEvent) => {
    const { dispatch } = this.props;
    const key = this.getHoveredKey(event.target as HTMLElement);
    if (key !== null) {
      dispatch('setHoveredKey', key);
    }
  };

  private handleMouseout = () => {
    const { dispatch, renderState } = this.props;
    const { hoveredKey } = renderState;

    if (hoveredKey !== null) {
      dispatch('setHoveredKey', null);
    }
  };

  render({ open, options }: Props) {
    return (
      <ul
        className={open ? 'tui-select-box-dropdown' : 'tui-select-box-hidden'}
        onMouseOver={this.handleMouseover}
        onMouseOut={this.handleMouseout}
      >
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </ul>
    );
  }
}

export const Dropdown = connect<StoreProps>(({ open, renderState, options }) => ({
  open,
  renderState,
  options,
}))(DropdownComp);
