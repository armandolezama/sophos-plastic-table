import { LitElement, html } from 'lit-element';
import styles from './sophos-plastic-table-styles';

export class SophosPlasticTable extends LitElement {
    /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
     constructor() {
      super();
      this.mainHeader = 'Hello from main header';
      this.caption = 'hello from caption';
      this.tableData = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      this.colGroups = [
        {
          span: '1',
          class: 'selected-column'
        },
        {
          span: '1',
          class: 'non-selected-column'
        }
      ];
      this.columnNames = ['', 'impares', 'pares', 'impares'];
      this.rowNames = ['primera', 'segunda', 'tercera'];
      this.createCustomCell = () => {};
    };
  
    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
      return {
        mainHeader : { type : String},
        caption : { type : String},
        tableData : { type : Array },
        colGroups : { type : Array },
        columnNames : { type : Array },
        rowNames : { type : Array },
      };
    };

    static get styles() {
      return styles;
    };

    createTable(){
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
    };

    createHeader(){
      return html`
        <thead id="table-main-header">
          ${this.mainHeader}
        </thead>
      `;
    };

    createCaption(){
      return html`
        <caption id="table-main-caption" >
          ${this.caption}
        </caption>
      `;
    };

    createColGroup(){
      return this._checkEmptyStructure(this.colGroups, () => html`
        <colgroup>
          ${this.colGroups.map(col => this.createColTag(col))}
        </colgroup>
      `);
    };

    createColTag(col){
      return html`
        <col span="${col.span}" class="${col.class}">
      `;
    };

    createColumnNames(){
      return this._checkEmptyStructure(this.columnNames, () => html`
        <tr id="column-names">
          ${this.columnNames.map(columnName => html`
              <th class="column-name">
                ${columnName}
              </th>
          `)}
        </tr>
      `);
    };

    createBody(){
      let grid = html``;
      for (let rowNumber = 0; rowNumber < this.tableData.length; rowNumber++) {
        grid = html`
          ${grid}
          ${this.createRow(this.tableData[rowNumber], rowNumber)}
        `;
      };

      grid = html`
        <tbody id="table-body">
          ${grid}
        </tbody>
      `;

      return grid;
    };

    createRow(row, rowIndex){
      let rowTemplate = this._checkEmptyStructure(this.rowNames, () => html`
        <th scope="col" class="row-name">
          ${this.rowNames[rowIndex]}
        </th>
      `);
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
    };

    createCell(cell, row, col){
      return html`
        <td 
        class="table-cell" 
        row="${row}" 
        column="${col}"
        @click="${this._cellHasBeenClicked}">
          ${cell}
        </td>
      `;
    };

    createFooter(){
      return html`
        <tfoot id="table-footer">
          <slot name="table-footer"></slot>
        </tfoot>
      `;
    }

    _checkEmptyStructure(structure, callback){
      return structure.length === 0 ? html`` : html`
        ${callback()}
      `;
    };

    _cellHasBeenClicked(e){
      const cell = e.currentTarget;
      const col = cell.getAttribute('column');
      const row = cell.getAttribute('row');
      const data = this.tableData[row][col];
      const detail = {
        col, row, data
      };
      this.dispatchEvent(new CustomEvent('cell-has-been-clicked', { detail }));
    };
  
    render() {
      return html`
        <div id="main-container">
          ${this.createTable()}
        </div>
      `;
    };
}
customElements.define('sophos-plastic-table', SophosPlasticTable);