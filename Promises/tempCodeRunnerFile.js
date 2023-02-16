if (state === state.PENDING) {
      return;
    }
    setTimeout(() => {
      if (value instanceof MyPromise) {
        value.then(this._resolve, this._reject);
      }
      this.state = state;
      this.value = value;
      this.executor();
    }, 0);