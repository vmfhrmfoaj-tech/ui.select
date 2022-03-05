const CSS_PREFIX = 'ui-select-box';

interface ClassMap {
  readonly SELECT_BOX: string;
  readonly ITEM: string;
  readonly ITEM_GROUP: string;
  readonly ITEM_GROUP_LABEL: string;
  readonly DROPDOWN: string;
  readonly INPUT: string;
  readonly PLACEHOLDER: string;
  readonly ICON: string;
  readonly OPEN: string;
  readonly HIDDEN: string;
  readonly DISABLED: string;
  readonly SELECTED: string;
  readonly HIGHLIGHT: string;
}

const prefix = (pre: string) => (str: string) => pre.concat(str);

const css = prefix(`${CSS_PREFIX}-`);

export const cls: ClassMap = {
  SELECT_BOX: CSS_PREFIX,
  ITEM: css('item'),
  ITEM_GROUP: css('item-group'),
  ITEM_GROUP_LABEL: css('item-group-label'),
  DROPDOWN: css('dropdown'),
  INPUT: css('input'),
  PLACEHOLDER: css('placeholder'),
  ICON: css('icon'),
  OPEN: css('open'),
  HIDDEN: css('hidden'),
  DISABLED: css('disabled'),
  SELECTED: css('selected'),
  HIGHLIGHT: css('highlight'),
};
