import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './sophos-plastic-table-styles';

export class SophosPlasticTable extends LitElement {
    /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
     constructor () {
      super();
      this.mainHeader = '';
      this.caption = '';
      this.tableData = [];
      this.colGroups = [];
      this.columnNames = [];
      this.rowNames = [];
      this.builderObject = {
        cellBuilder : undefined,
        rowNameBuilder : undefined,
        columnNameBuilder : undefined
      };
    }
  
    /**
      * Declared properties and their corresponding attributes
      */
    static get properties () {
      return {
        mainHeader : { type : String},
        caption : { type : String},
        tableData : { type : Array },
        colGroups : { type : Array },
        columnNames : { type : Array },
        rowNames : { type : Array },
        builderObject : { type : Object}
      };
    }

    static get styles () {
      return styles;
    }

    set builderObject (value){
      const oldValue = this._builderObject;
      this._builderObject = value;
      this.requestUpdate('builderObject', oldValue);
    }

    createTable (){
      return html`
        <table id="plastic-table">
          ${this.createHeader()}
          ${this.createCaption()}
          ${this.createColGroup()}
          ${this.createColumnNames()}
          ${this.createBody()}
          ${this.createFooter()}
        </table>
      `;
    }

    createHeader (){
      return html`
        <thead id="table-main-header">
          ${this.mainHeader}
        </thead>
      `;
    }

    createCaption (){
      return html`
        <caption id="table-main-caption" >
          ${this.caption}
        </caption>
      `;
    }

    createColGroup (){
      return this._checkStructure(this.colGroups, () => html`
        <colgroup>
          ${this.convertColGroupData()}
        </colgroup>
      `);
    }

    convertColGroupData (){
      return this.colGroups.map(col => this.createColTag(col))
    }

    createColTag (col){
      return html`
        <col span=${col.span} class=${col.class} style=${styleMap(this.getColTagStyles(col.style))}>
      `;
    }

    getColTagStyles (style){
      return typeof style === 'object' ? style : {};
    }

    createColumnNames (){
      return this._checkStructure(this.columnNames, () => html`
        <tr id="column-names">
          ${this.convertColumnNames()}
        </tr>
      `);
    }

    convertColumnNames (){
      return this.columnNames.map(columnName => this.createColumnName(columnName))
    }

    createColumnName (columnName){
      return html`
      <th scope="row" class="column-name">
        ${this._columNameBuilder(columnName)}
      </th>
  `
    }

    _columNameBuilder (columnName){
      return this._builderObject?.columnNameBuilder ? this._builderObject.columnNameBuilder(columnName) : columnName;
    }

    createBody (){
      let grid = html``;
      for (let rowNumber = 0; rowNumber < this.tableData.length; rowNumber++) {
        grid = html`
          ${grid}
          ${this.createRow(this.tableData[rowNumber], rowNumber)}
        `;
      }

      grid = html`
        <tbody id="table-body">
          ${grid}
        </tbody>
      `;

      return grid;
    }

    createRow (row, rowIndex){
      let rowTemplate = this._checkStructure(this.rowNames, this.createRowName(this.rowNames[rowIndex]));
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        rowTemplate = html`
          ${rowTemplate}
          ${this.createCell(row[colIndex], rowIndex, colIndex)}
        `}
      return html`
        <tr class="table-row">
          ${rowTemplate}
        </tr>
      `;
    }

    createRowName (rowName){
      return () => html`
        <th scope="col" class="row-name">
          ${this._buildRowNameCell(rowName)}
        </th>
      `
    }

    createCell (cell, row, col){
      return html`
        <td 
        class="table-cell" 
        row=${row} 
        column=${col}
        @click=${this._cellHasBeenClicked}>
          ${this._buildCell(cell)}
        </td>
      `;
    }

    _buildRowNameCell (rowName){
      return this._builderObject?.rowNameBuilder ? this._builderObject.rowNameBuilder(rowName) : rowName;
    }

    _buildCell (cell){
      return this._builderObject?.cellBuilder ? this._builderObject.cellBuilder(cell) : cell;
    }

    createFooter (){
      return html`
        <tfoot id="table-footer">
          <slot name="table-footer"></slot>
        </tfoot>
      `;
    }

    _checkStructure (structure, callback){
      return structure.length === 0 ? html`` : html`
        ${callback()}
      `;
    }

    _cellHasBeenClicked (e){
      const cell = e.currentTarget;
      const col = cell.getAttribute('column');
      const row = cell.getAttribute('row');
      const data = this.tableData[row][col];
      const detail = {
        col,
        row,
        data,
        cell,
      };
      this.dispatchEvent(new CustomEvent('cell-has-been-clicked', { detail }));
    }
  
    render () {
      return html`
        <div id="main-container">
          ${this.createTable()}
        </div>
      `;
    }
}
customElements.define('sophos-plastic-table', SophosPlasticTable);

/**
 * TO-DO: add default column and row names
 * TO-DO: add font properties for css row-names and column-names and cells
 */