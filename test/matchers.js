export function toBeUndefinedOrZero() {
  return {
      compare(actual, expected) {
        return {
          pass: actual === undefined || actual === 0,
          message: 'should be undefined or equal 0, was ' + actual,
        }
      }
  }
}
