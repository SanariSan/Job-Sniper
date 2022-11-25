import { GenericError } from '../../../modules/core/error';

class GenericExpressError extends GenericError {
  public name: string;

  public description: string;

  public miscellaneous?: Record<string, unknown>;

  constructor({
    message,
    miscellaneous,
  }: {
    message: string;
    miscellaneous?: Record<string, unknown>;
  }) {
    super(message);

    this.name = 'GenericExpressError';
    this.description = `Express generic error`;
    this.miscellaneous = miscellaneous;
  }
}

export { GenericExpressError };