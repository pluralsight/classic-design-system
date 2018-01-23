import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import { JSDOM } from 'jsdom'

configure({ adapter: new Adapter() })
