const STATE_KEY_PREFIX = `psds-scroll-y|`

export class SessionStorage {
  read(key: string): number {
    const stateKey = this.getStateKey(key)

    try {
      const value = window.sessionStorage.getItem(stateKey)
      return value ? JSON.parse(value) : 0
    } catch (e) {
      console.warn(
        `[psds-docs] Unable to access sessionStorage; sessionStorage is not available.`
      )

      return 0
    }
  }

  save(key: string, value: number): void {
    const stateKey = this.getStateKey(key)
    const storedValue = JSON.stringify(value)

    try {
      window.sessionStorage.setItem(stateKey, storedValue)
    } catch (e) {
      console.warn(
        `[psds-docs] Unable to save state in sessionStorage; sessionStorage is not available.`
      )
    }
  }

  getStateKey(key: string): string {
    const stateKeyBase = `${STATE_KEY_PREFIX}`
    return key === null || typeof key === `undefined`
      ? stateKeyBase
      : `${stateKeyBase}|${key}`
  }
}
