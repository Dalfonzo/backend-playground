export class Result<T> {
  public isSuccess: boolean;
  public code?: number;
  public isFailure: boolean;
  private error?: T | string | null;
  private _value?: T;

  public constructor(isSuccess: boolean, error?: T | string | null, value?: T, code?: number) {
    if (isSuccess && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!isSuccess && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;
    this.code = code;
  }

  public getError(): T {
    return this.error as T;
  }

  public getValue(): T {
    return this._value as T;
  }

  public getCode() {
    return this.code as number;
  }

  public static ok<U>(value?: U, code?: number): Result<U> {
    return new Result<U>(true, null, value, code);
  }

  public static fail<U>({ message, code }: { message: string; code?: number }): Result<U> {
    return new Result<U>(false, message, undefined, code);
  }
}
