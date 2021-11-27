import { css } from 'lit-element';

export default css`
  #plastic-table {
    display: var(--sophos-plastic-table-plastic-table-display, table);
    width: var(--sophos-plastic-table-plastic-table-width, auto);
    height: var(--sophos-plastic-table-plastic-table-height, auto);
    max-width: var(--sophos-plastic-table-plastic-table-max-width, auto);
    max-height: var(--sophos-plastic-table-plastic-table-max-height, auto);
    margin: var(--sophos-plastic-table-plastic-table-margin, auto);
    padding: var(--sophos-plastic-table-plastic-table-padding, auto);
    background: var(--sophos-plastic-table-plastic-table-background, none);
    border: var(--sophos-plastic-table-plastic-table-border, none);
    border-collapse: var(--sophos-plastic-table-plastic-table-border-collapse, collapse);
  }

  #table-main-header {
    display: var(--sophos-plastic-table-table-main-header-display, table-header-group);
    width: var(--sophos-plastic-table-table-main-header-width, auto);
    height: var(--sophos-plastic-table-table-main-header-height, auto);
    max-width: var(--sophos-plastic-table-table-main-header-max-width, auto);
    max-height: var(--sophos-plastic-table-table-main-header-max-height, auto);
    margin: var(--sophos-plastic-table-table-main-header-margin, auto);
    padding: var(--sophos-plastic-table-table-main-header-padding, auto);
    background: var(--sophos-plastic-table-table-main-header-background, none);
    border: var(--sophos-plastic-table-table-main-header-border, none);
    border-collapse: var(--sophos-plastic-table-table-main-header-border-collapse, collapse);
  }

  #table-main-caption {
    display: var(--sophos-plastic-table-table-main-caption-display, table-caption);
    width: var(--sophos-plastic-table-table-main-caption-width, auto);
    height: var(--sophos-plastic-table-table-main-caption-height, auto);
    max-width: var(--sophos-plastic-table-table-main-caption-max-width, auto);
    max-height: var(--sophos-plastic-table-table-main-caption-max-height, auto);
    margin: var(--sophos-plastic-table-table-main-caption-margin, auto);
    padding: var(--sophos-plastic-table-table-main-caption-padding, auto);
    background: var(--sophos-plastic-table-table-main-caption-background, none);
    border: var(--sophos-plastic-table-table-main-caption-border, none);
    border-collapse: var(--sophos-plastic-table-table-main-caption-border-collapse, collapse);
  }

  #table-body {
    display: var(--sophos-plastic-table-table-body-display, table-row-group);
    width: var(--sophos-plastic-table-table-body-width, auto);
    height: var(--sophos-plastic-table-table-body-height, auto);
    max-width: var(--sophos-plastic-table-table-body-max-width, auto);
    max-height: var(--sophos-plastic-table-table-body-max-height, auto);
    margin: var(--sophos-plastic-table-table-body-margin, auto);
    padding: var(--sophos-plastic-table-table-body-padding, auto);
    background: var(--sophos-plastic-table-table-body-background, none);
    border: var(--sophos-plastic-table-table-body-border, none);
    border-collapse: var(--sophos-plastic-table-table-body-border-collapse, collapse);  
  }

  .table-row {
    display: var(--sophos-plastic-table-table-row-display, table-row);
    width: var(--sophos-plastic-table-table-row-width, auto);
    height: var(--sophos-plastic-table-table-row-height, auto);
    max-width: var(--sophos-plastic-table-table-row-max-width, auto);
    max-height: var(--sophos-plastic-table-table-row-max-height, auto);
    margin: var(--sophos-plastic-table-table-row-margin, auto);
    padding: var(--sophos-plastic-table-table-row-padding, auto);
    background: var(--sophos-plastic-table-table-row-background, none);
    border: var(--sophos-plastic-table-table-row-border, none);
    border-collapse: var(--sophos-plastic-table-table-row-border-collapse, collapse);
  }

  .row-name {
    display: var(--sophos-plastic-table-row-name-display, table-cell);
    width: var(--sophos-plastic-table-row-name-width, auto);
    height: var(--sophos-plastic-table-row-name-height, auto);
    max-width: var(--sophos-plastic-table-row-name-max-width, auto);
    max-height: var(--sophos-plastic-table-row-name-max-height, auto);
    margin: var(--sophos-plastic-table-row-name-margin, auto);
    padding: var(--sophos-plastic-table-row-name-padding, auto);
    background: var(--sophos-plastic-table-row-name-background, none);
    border: var(--sophos-plastic-table-row-name-border, none);
    border-collapse: var(--sophos-plastic-table-row-name-border-collapse, collapse);
  }

  .table-cell {
    display: var(--sophos-plastic-table-table-cell-display, table-cell);
    width: var(--sophos-plastic-table-table-cell-width, auto);
    height: var(--sophos-plastic-table-table-cell-height, auto);
    max-width: var(--sophos-plastic-table-table-cell-max-width, auto);
    max-height: var(--sophos-plastic-table-table-cell-max-height, auto);
    margin: var(--sophos-plastic-table-table-cell-margin, auto);
    padding: var(--sophos-plastic-table-table-cell-padding, auto);
    background: var(--sophos-plastic-table-table-cell-background, none);
    border: var(--sophos-plastic-table-table-cell-border, none);
    border-collapse: var(--sophos-plastic-table-table-cell-border-collapse, collapse);
  }

  .selected-column {
    display: var(--sophos-plastic-table-selected-column-display, table-column);
    width: var(--sophos-plastic-table-selected-column-width, auto);
    height: var(--sophos-plastic-table-selected-column-height, auto);
    max-width: var(--sophos-plastic-table-selected-column-max-width, auto);
    max-height: var(--sophos-plastic-table-selected-column-max-height, auto);
    margin: var(--sophos-plastic-table-selected-column-margin, auto);
    padding: var(--sophos-plastic-table-selected-column-padding, auto);
    background: var(--sophos-plastic-table-selected-column-background, none);
    border: var(--sophos-plastic-table-selected-column-border, none);
    border-collapse: var(--sophos-plastic-table-selected-column-border-collapse, collapse);
  }

  .non-selected-column {
    display: var(--sophos-plastic-table-non-selected-column-display, table-column);
    width: var(--sophos-plastic-table-non-selected-column-width, auto);
    height: var(--sophos-plastic-table-non-selected-column-height, auto);
    max-width: var(--sophos-plastic-table-non-selected-column-max-width, auto);
    max-height: var(--sophos-plastic-table-non-selected-column-max-height, auto);
    margin: var(--sophos-plastic-table-non-selected-column-margin, auto);
    padding: var(--sophos-plastic-table-non-selected-column-padding, auto);
    background: var(--sophos-plastic-table-non-selected-column-background, none);
    border: var(--sophos-plastic-table-non-selected-column-border, none);
    border-collapse: var(--sophos-plastic-table-non-selected-column-border-collapse, collapse);
  }
`;