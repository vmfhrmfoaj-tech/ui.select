import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { Item } from '@t/store/data';
import { Option } from './option';
import { RenderState } from '@t/store/renderState';

interface StoreProps {
  renderState: RenderState;
  items: Item[];
  isOpen: boolean;
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

  render({ isOpen, items }: Props) {
    return (
      <ul
        className={isOpen ? 'tui-select-box-dropdown' : 'tui-select-box-hidden'}
        onMouseOver={this.handleMouseover}
        onMouseOut={this.handleMouseout}
      >
        {items.map((item, index) => (
          <Option key={index} item={item} />
        ))}
      </ul>
    );
  }
}

export const Dropdown = connect<StoreProps>(({ renderState, data }) => ({
  renderState,
  items: data.items,
  isOpen: renderState.isOpen,
}))(DropdownComp);
