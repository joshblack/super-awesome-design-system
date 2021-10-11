declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoAxeViolations(): R;
    }
  }
}

export {};
