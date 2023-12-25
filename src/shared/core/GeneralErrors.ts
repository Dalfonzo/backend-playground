export class GeneralErrors {
  public InternalServerError() {
    return { message: 'Something went wrong in the server', code: 500 };
  }

  public NotFound() {
    return { message: 'Not found', code: 404 };
  }

  public BadRequest() {
    return { message: 'Bad  Request', code: 400 };
  }
}
