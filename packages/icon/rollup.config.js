import { config } from '../../rollup.config'
import packageJSON from './package.json'
const root = __dirname
export default {
  ...config({ root, packageJSON })
}
