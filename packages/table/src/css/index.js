import core from '@pluralsight/ps-design-system-core'

export default {
  '.psds-table': {
    display: 'flex',
    width: '100%',
    flexFlow: 'column',
    justifyContent: 'center'
  },
  '.psds-table-dark-theme': {
    backgroundColor: core.colors.gray06,
  },  
  '.psds-table-header': {
    padding: '0 1%',
    display: 'flex',
    wordBreak: 'break-word',
    justifyContent: 'left',
    flexDirection: 'row',
    textAlign: 'left',
    flexGrow: '1',
    flexBasis: '0',
    color: core.colors.gray02,
    fontSize: '12px',
    lineHeight: '15px',
    height: '38px',
    fontWeight: core.type.fontWeightMedium,
  },
  '.psds-table-header-dark:hover': {
    color: core.colors.white,
  },
  '.psds-table-header-light:hover': {
    color: core.colors.black,
  },
  '.psds-table-header-light': {
    color: core.colors.gray03
  },
  '.psds-table-header--active': {
    color: core.colors.white
  },
  '.psds-table-header-light--active': {
    color: core.colors.black
  },
  '.psds-table-header-controls': {
    width: '20px',
    height: '20px',
    display: 'flex',
    marginLeft: '10px',
    position: 'relative',
    top: '-3px',
  },
  '.psds-table-header-controls--active': {
    top: '0px',
  },
  '.psds-table-line': {
    display: 'flex',
    position: 'relative',
    borderBottom: `1px solid ${core.colors.gray03}`
  },
  '.psds-table-line-light': {
    borderColor: `${core.colors.gray02}`
  },
  '.psds-table-sortable-header': {
    cursor: 'pointer'
  },
  '.psds-table-sort-icons': {
    position: 'relative',
    marginTop: '3px',
    width: '15px',
    display: 'inline-block',
    height: '20px',
    lineHeight: '27px',
  },
  '.psds-table-sort-icon': {
    position: 'absolute'
  },
  '.psds-table-sort--active': {
    color: core.colors.white
  },
  '.psds-table-sort-light--active': {
    color: core.colors.black
  },
  '.psds-table__sort-icon-up': {
    top: '-5px',
    left: '0px'
  },
  '.psds-table__sort-icon-down': {
    top: '1px',
    left: '0px'
  },
  '.psds-table-row-container': {
    display: 'flex',
    flexFlow: 'column'
  },
  '.psds-table-row-container-dark': {
    borderBottom: `1px solid ${core.colors.gray03}`
  },
  '.psds-table-row-container-light': {
    borderBottom: `1px solid ${core.colors.gray02}`
  },
  '.psds-table-row-container-clickable': {
    cursor: 'pointer'
  },
  '.psds-table-row-container-dark-clickable:hover': {
    backgroundColor: core.colors.gray04
  },
  '.psds-table-row-container-light-clickable:hover': {
    backgroundColor: core.colors.gray02
  },
  '.psds-table-row-container-clickable--open': {
    marginBottom: '24px',
    borderBottom: '0px'
  },
  '.psds-table-row-container-dark-clickable--open': {
    backgroundColor: core.colors.gray04
  },
  '.psds-table-row-container-light-clickable--open': {
    backgroundColor: core.colors.gray02
  },
  '.psds-table-row': {
    display: 'flex',
    width: '100%'
  },
  '.psds-table-row-nested': {
    padding: '30px',
    cursor: 'default',
    backgroundColor: core.colors.gray05
  },
  '.psds-table-row-nested-light': {
    backgroundColor: core.colors.gray01
  },
  '.psds-table-row-nested-cell-dark': {
    color: core.colors.gray02
  },
  '.psds-table-row-nested-cell-light': {
    color: core.colors.gray03
  },
  '.psds-table-column': {
    color: core.colors.white,
    padding: '1%',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '18px',
    minHeight: '55px',
    flexGrow: '1',
    flexBasis: '0'
  },
  '.psds-table-column-light': {
    color: core.colors.gray03
  }
}
